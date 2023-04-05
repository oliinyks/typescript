import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { createTheme } from '@mui/material/styles';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
	const theme = useMemo(() => createTheme(themeSettings), []);
	return (
      <Admin
        theme={theme}
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          icon={PostIcon}
        />
        <Resource
          name="users"
          list={UserList}
          recordRepresentation="name"
          create={PostCreate}
          icon={UserIcon}
        />
      </Admin>
  );
};

export default App;
