import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';
export const FONT_FAMILY_ROBOTO = 'Roboto';
export const FONT_FAMILY_MONTSERRAT = 'Montserrat';
export const FONT_FAMILY_SEGOEUI = 'SegoeUI';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_ROBOTO = '500';
export const FONT_WEIGHT_SEGOEUI = '600';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_21 = scaleFont(21);
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_8 = scaleFont(8);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
export const FONT_ROBOTO = {
  fontFamily: FONT_FAMILY_ROBOTO,
  fontWeight: FONT_WEIGHT_ROBOTO,
};

export const FONT_MONTSERRAT = {
  fontFamily: FONT_FAMILY_MONTSERRAT,
};

export const FONT_SEGOEUI = {
  fontFamily: FONT_FAMILY_SEGOEUI,
  fontWeight: FONT_WEIGHT_SEGOEUI,
};
