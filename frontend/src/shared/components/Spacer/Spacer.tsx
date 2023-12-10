type Props = {
  spacing?: number;
  isHorizontal?: boolean;
};

export const Spacer = (props: Props) => {
  const { spacing, isHorizontal } = props;
  return (
    <div className={`spacer-${isHorizontal ? 'h' : 'v'}-${spacing || 1}`} />
  );
};
