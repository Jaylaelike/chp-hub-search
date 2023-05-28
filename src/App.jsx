import { Component } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import Button from "@mui/material/Button";
import Loading from "./Loading";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: "",
      isLoading: true,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    setTimeout(() => {
      fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json())
        .then((users) => this.setState({ cats: users }))
        .then((data) => {
          this.setState({ data, isLoading: false });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          this.setState({ isLoading: false });
        }, 2000);
    });
  }

  render() {
    const { isLoading } = this.state;
    const { cats, searchfield } = this.state;
    const filteredCats = cats.filter((cat) => {
      return cat.productName.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (isLoading) {
      return (
        <div className="grid justify-items-center">
          <div>
            Loading....
            <Loading />
          </div>
        </div>
      );
    }

    if (!cats) {
      return <div>No data available</div>;
    }
    return (
      <>
        <div className="pt-6 pb-8">
          <div className="grid justify-items-center pb-6">
            <p className="text-white-900 text-5xl dark:text-white">
              CHP HUB ENGINEER
            </p>
          </div>

          <SearchBox searchChange={this.onSearchChange} />
          <div className="grid justify-items-end pr-8 pt-6">
            <div>
              <Button
                variant="contained"
                color="success"
                display="flex"
                justifyContent="flex-end"
                href="https://chp-hub-backend-smarkwisai.vercel.app"
              >
                แก้ไขข้อมูล
              </Button>
            </div>
          </div>
        </div>

        <div className="grid justify-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredCats.map((user, i) => {
              return (
                <>
                  <Card
                    key={filteredCats[i].id}
                    thumbnail={filteredCats[i].thumbnail}
                    unitPrice={filteredCats[i].unitPrice}
                    productName={filteredCats[i].productName}
                    url={filteredCats[i].url}
                  />
                </>
              );
            })}
          </div>
        </div>

        <ParticlesBg type="polygon" bg={true} />
      </>
    );
  }
}

export default App;

// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4
