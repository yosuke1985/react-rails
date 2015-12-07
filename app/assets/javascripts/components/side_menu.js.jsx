var SideNav = require("react-sidenav");

var SideMenu = React.createClass({

  render: function(){
    var nav = [
            {key: 'landing', title: 'Dashboard', 'iconClassName': 'fa fa-dashboard'},
            {key: 'channels', title: 'Channels', 'iconClassName': 'fa fa-exchange'},
            {key: 'fleet', title: 'Fleet', 'iconClassName': 'fa fa-truck'},
            {key: 'products', title: 'Products', 'iconClassName': 'fa fa-cubes'},
            {key: 'inventory', title: 'Inventory', 'iconClassName': 'fa fa-database'}
        ];
    return (
        <SideNav className={"plain"} itemType="righticon" itemHeight="32px" navigation={nav}></SideNav>
      );
  }
});
