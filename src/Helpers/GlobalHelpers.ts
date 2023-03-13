import numbro from "numbro";
import { SORT_TYPE } from "../Constants/Miscs";

export const performanceGetter = (param: string) => {
  const result = param > "0" ? `+${param}%` : `${param}%`;

  return result;
};

export const groupingFormat = (number: number) => {
  const opts = {
    mantissa: 0,
    trimMantissa: true,
    thousandSeparated: true,
  };

  if (Number.isNaN(number)) return null;

  try {
    return numbro(number).format(opts);
  } catch (e) {
    return null;
  }
};

type Data = {
  currencyGroup: string;
  name: string;
  logo: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
  color: string;
}[];

export function sortToken(data: Data, type = SORT_TYPE.HIGHEST_PERFORMANCE) {
  if (Array.isArray(data) && data.length > 0 && type) {
    const crypto = [...data].map((item) => {
      const tokenName = item;
      return tokenName;
    });

    if (type === SORT_TYPE.ALPHABETICAL) {
      crypto.sort((a, b) => {
        const tokenA = a?.name;
        const tokenB = b?.name;
        return tokenA.localeCompare(tokenB);
      });
    }

    if (type === SORT_TYPE.HIGHEST_PERFORMANCE) {
      crypto.sort((a, b) => {
        const tokenA = parseFloat(a?.day);
        const tokenB = parseFloat(b?.day);
        return tokenB - tokenA;
      });
    }

    if (type === SORT_TYPE.LOWEST_PERFORMANCE) {
      crypto.sort((a, b) => {
        const tokenA = parseFloat(a?.day);
        const tokenB = parseFloat(b?.day);
        return tokenA - tokenB;
      });
    }

    return [...crypto];
  }

  return data;
}
