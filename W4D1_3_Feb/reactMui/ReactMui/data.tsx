import Dashboard from"./src/screens/dashboard"
import Contact from"./src/screens/contactUs"
import Subcription from "./src/screens/subscriptions"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const Data = [{

  id:0,
  label:"dashboard",
  img:<DashboardIcon/>,
  component:<Dashboard/>,
  path:"/dashboard"
},
{

    id:1,
    label:"Contact",
    img:<PhonePausedIcon/>,
    component:<Contact/>,
    path:"/contact"
  },
  {

    id:2,
    label:"Subcription",
    img:<SubscriptionsIcon/>,
    component:<Subcription/>,
    path:"/subscriptions"
  }


]
export default Data