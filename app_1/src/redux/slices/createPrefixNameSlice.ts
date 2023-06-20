interface createPrefixNameSliceOverload {
  <N extends string>(name: N): {
    <S extends undefined>(suffix?: S): N;
    <S extends string>(suffix: S): `${N}/${S}`;
  };
}

// TODO: FIX THIS
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const createPrefixNameSlice: createPrefixNameSliceOverload = (name) => {
  return (suffix: any) => {
    return suffix ? `${name}/${suffix}` : name;
  };
};
