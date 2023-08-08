interface UserInterface {
  id: string;
  username: string;
  email: string;
  image: string;
}

interface AuthStateInterface {
  user: UserInterface;
}

type AuthContextStateType = {
  state: AuthStateInterface;
  login: (user: UserInterface) => void;
  logout: () => void;
};

export { AuthContextStateType, UserInterface };
