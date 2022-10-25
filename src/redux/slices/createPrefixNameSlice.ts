export const createPrefixNameSlice = <N extends string>(name: N) => {
  return <S extends string>(suffix?: S): `${N}/${S}` | N => {
    return suffix ? `${name}/${suffix}` : name;
  };
};
