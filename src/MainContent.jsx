import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Jones",
        phone: "982-014",
        address: { city: "New Jersey" },
        photo: "https://picsum.photos/id/1009/60",
      },
      {
        id: 3,
        name: "Allen",
        phone: "1889-921",
        address: { city: "Dallas" },
        photo: "https://picsum.photos/id/1006/60",
      },
      {
        id: 4,
        name: "James",
        phone: null,
        address: { city: "London" },
        photo: "https://picsum.photos/id/1005/60",
      },
      {
        id: 5,
        name: "John",
        phone: null,
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1001/60",
      },
    ],
  };

  //   customerNamesStyle = (custName) => {
  //     if (custName.startsWith("S")) return "green-highlight";
  //     else if (custName.startsWith("J")) return "red-highlight";
  //     else return {};
  //   };

  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>CustomerName</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when user clicks Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    {
      if (phone) return phone;
      else {
        return <div className="bg-warning p-2 text-center">No Phone</div>;
      }
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    console.log(cust);
    console.log(index);
  };
}
