import {ADMINISTRATION_TYPE} from "../constants/index";

export function chooseByAdministrationType(optionsArr: any[], currentOption: string) {
  if (!optionsArr || optionsArr.length !== 3) {
    console.error('Provide 3 options.');
    return;
  }

  switch (currentOption) {
    case ADMINISTRATION_TYPE.MINISTRY: {
      return optionsArr[0];
    }
    case ADMINISTRATION_TYPE.ANTICORRUPTION_ADMIN: {
      return optionsArr[1];
    }
    case ADMINISTRATION_TYPE.COUNTY: {
      return optionsArr[2];
    }
    default: {
      console.error('Unknown administration type.');
    }
  }
}
