import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
//redux
import {useDispatch, useSelector} from 'react-redux';

// import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderComponent} from '_atoms';
import {PrimaryButton} from '_organisms';
//printer
import {NetPrinter} from 'react-native-thermal-receipt-printer';

import {AddPrinterModel} from './addPrinterModel';
import Styles from './Style';
import {
  printerConnectionRequest,
  fetchPrinterList,
  addPrinterRequest,
  updatePrinter,
} from './action';

export default function Printer({navigation}) {
  const dispatch = useDispatch();
  const {connected} = useSelector(state => state.printer);
  const printerList = useSelector(state => state.printerList);
  //state

  console.log('connected...', connected);

  const [port, setport] = useState(9100),
    [host, sethost] = useState('192.168.0.33'),
    [isVisible, setIsVisible] = useState(false),
    [state, setState] = useState(),
    [isEdit, setIsEdit] = useState(false),
    [editId, setEditId] = useState(0),
    [list, setList] = useState(connected || []);
  const [printPopup, setPrintPopup] = useState(true);
  const [ip, setIp] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    NetPrinter.init().then(() => {
      setState(
        Object.assign({}, state, {
          printers: [{host, port}],
          printerConnection: false,
        }),
      );
    });
  }, []);

  useEffect(() => {
    fetchPrinterListRequest();
  }, []);
  //get Printer List
  function fetchPrinterListRequest() {
    dispatch(fetchPrinterList());
  }

  const _connectPrinter = (host, port, id) => {
    try {
      //connect printer
      NetPrinter.connectPrinter(host, port)
        .then(printer => {
          const updatedArray = [...list, id];
          setList(updatedArray);
          dispatch(printerConnectionRequest(updatedArray));
        })

        .catch(error =>
          setState(
            Object.assign({}, state, {
              currentPrinter: null,
            }),
          ),
        );
    } catch (err) {}

    // printerConnected(state);
  };

  const _disConnectPrinter = id => {
    NetPrinter.closeConn().then(printer => setList(list.filter(x => x !== id)));
  };

  const addPrinter = () => {
    setIp(null);
    setName(null);
    setIsEdit(false);
    setIsVisible(true);
    setEditId(0);
    // setcount(count + 1);
    // console.log('adprinter', count);
  };

  function editPrinter(name, ip, id) {
    setIp(ip);
    setName(name);
    setEditId(id);
    setIsEdit(true);
    setIsVisible(true);
  }

  const closeModel = () => setIsVisible(false);

  const closeSucess = () => {
    setPrintPopup(true), setIsVisible(false);
  };
  function successPopup(id) {
    if (id === 0) {
      const payload = {
        printer_name: name,
        printer_ip_address: ip,
      };
      const onSuccess = data => {
        setPrintPopup(false);
        fetchPrinterListRequest();
      };
      const onFail = err => {};
      dispatch(addPrinterRequest({payload, onSuccess, onFail}));
    } else {
      const payload = {
        printer_name: name,
        printer_ip_address: ip,
        id: id,
      };
      const onSuccess = data => {
        setPrintPopup(false);
        fetchPrinterListRequest();
      };
      const onFail = err => {};
      dispatch(updatePrinter({payload, onSuccess, onFail}));
    }
  }

  return (
    <>
      <HeaderComponent
        isPrinter={true}
        iconName={'addprinter'}
        headerName={'Connect to Printers'}
        isBack={true}
        handelBackPress={() => navigation.goBack()}
        printerPress={addPrinter}
      />
      {console.log('printerList', printerList?.printerList?.printers)}
      <View style={Styles.main}>
        <ScrollView>
          {printerList?.printerList?.printers?.map((item, i) => {
            if (!item)
              return (
                <View style={Styles.noDataView}>
                  <Image
                    style={Styles.noConnectionImg}
                    source={require('../../assets/icons/no-connection.png')}
                  />
                  <Text style={Styles.noPrinterTxt}>No Printers Found</Text>
                  <TouchableOpacity style={Styles.nodataSection}>
                    <Image
                      tintColor={'#E16D34'}
                      style={Styles.refreshImg}
                      source={require('../../assets/icons/refresh.png')}
                    />
                    <Text style={Styles.refreshText}>Refresh </Text>
                  </TouchableOpacity>
                </View>
              );
            const isConnected = list.find(x => x === item.id);
            return (
              <>
                <View style={Styles.contant} key={i}>
                  <TouchableOpacity
                    onPress={() =>
                      editPrinter(
                        item.printer_name,
                        item.printer_ip_address,
                        item.id,
                      )
                    }>
                    <View style={Styles.section}>
                      <Image
                        tintColor={'#E16D34'}
                        style={Styles.prntImg}
                        source={require('../../assets/icons/print.png')}
                      />
                      <View>
                        <Text>{item.printer_name}</Text>
                        <Text>{item.printer_ip_address}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        isConnected
                          ? _disConnectPrinter(item.id)
                          : _connectPrinter(
                              item.printer_ip_address,
                              port,
                              item.id,
                            )
                      }>
                      <View
                        style={isConnected ? Styles.btnConnect : Styles.btn}>
                        <Text
                          style={
                            isConnected
                              ? Styles.btnTextConnected
                              : Styles.btnText
                          }>
                          {isConnected ? 'connected' : 'connect'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={Styles.border}></View>
                {console.log('item', item)}
              </>
            );
          })}
        </ScrollView>
        <AddPrinterModel
          visible={isVisible}
          close={closeModel}
          printPopup={printPopup}
          closeSucess={closeSucess}
          successPopup={successPopup}
          onChangeName={newName => setName(newName)}
          name={name}
          onChangeIp={newIp => setIp(newIp)}
          ip={ip}
          btnAction={isEdit ? 'update' : 'save'}
          editId={editId}
        />
        {/* <View>
          <PrimaryButton onPress={findPrinters} name={'Find Printer'} />
        </View> */}
      </View>
    </>
  );
}
