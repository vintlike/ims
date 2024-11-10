interface Props {
  children: React.ReactNode;
}

/**
 * 路由守卫
 * @param param
 * @returns
 */
const Authority: React.FC<Props> = (props) => {
  const { children } = props;

  // const user = useAppSelector((state) => state.user);

  // if (!user?.power) {
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
};

export default Authority;
