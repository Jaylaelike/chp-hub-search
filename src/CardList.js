import React, {Component} from 'react';
import Card from './Card';
import SearchBox from './SearchBox';

class CardList extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }
  
  componentDidMount() {
    fetch('https://server-chphub.herokuapp.com/products')
    .then(response => response.json())
    .then(users => this.setState({cats: users}));
  }

  render() {
    const {cats, searchfield} = this.state;
    const filteredCats = cats.filter(cat => {
        return cat.productName.toLowerCase().includes(searchfield.toLowerCase());
      })

    return (<div className='tc'>
      <h1 className='f1'>CHP HUB</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      {
        filteredCats.map((user, i) => {
          return (
            <Card
              key={filteredCats[i].id}
              thumbnail={filteredCats[i].thumbnail}
              unitPrice= {filteredCats[i].unitPrice}
              productName={filteredCats[i].productName}
              url={filteredCats[i].url}
            />
          );
        })
      }
  </div>);
  }
}

export default CardList;
