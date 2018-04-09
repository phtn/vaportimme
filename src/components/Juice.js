import React from 'react'
import { Item, Rating, Menu, Segment, Icon } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    header: 'Apple Pie',
    description: 'Naturally sweet apples spiced with cinnamon.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
   
  },
  {
    childKey: 1,
    header: 'Area 51',
    description: 'Sweet Caramel Tobacco with Raspberry.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 2,
    header: 'Black Cherry Tobacco',
    description: 'Tobacco flavor with a hint of Black Cherry.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
   
  },
  {
    childKey: 3,
    header: 'Blueberry Champagne',
    description: 'Tobacco flavored Blueberries and Champagne.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 4,
    header: 'Blueberry Danish',
    description: 'Freshly picked Blueberries on a crumbly Danish.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
   
  },
  {
    childKey: 5,
    header: 'Blu Sky',
    description: 'Creamy Madagascar Vanilla beans with Jamaican Blue Vanilla beans.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 6,
    header: 'Blu Sky Menthol',
    description: 'Blue Sky with a touch of Cool Mint and Smooth Caramel.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
   
  },
  {
    childKey: 7,
    header: 'Bubble Gum',
    description: 'Old Fashioned baseball card Bubble Gum.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 8,
    header: 'Caramel Tobacco',
    description: 'Smooth Tobacco with a Caramel Twist.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
   
  },
  {
    childKey: 9,
    header: 'Clover Moon',
    description: 'Peaches',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 10,
    header: 'Cherri Cola',
    description: 'Classic RC like Cola taste with a hint of Cherry.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 11,
    header: 'Cinna Bunn',
    description: 'Fresh out from grandmas oven goodness.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 12,
    header: 'Cream Soda',
    description: 'Just like the Soda Fountain',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 13,
    header: 'Creamy Peppermint',
    description: 'Sweet + Minty',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 14,
    header: 'Creamy Wild Berries',
    description: 'Strawberries, Blueberries and Raspberrieswith Sweet Cream.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 15,
    header: 'Etreme Menthol',
    description: 'Exactly what it says "EXTREME MENTHOL".',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 16,
    header: 'Fresh Strawberry',
    description: 'Sweet Field Strawberries.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 17,
    header: 'Fruity Hoops',
    description: 'Fruit Loop Cereal for breakfast.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 18,
    header: 'Grape Soda',
    description: 'Classic Grape Fanta soda taste.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 19,
    header: 'Kandy Andes',
    description: '"Just like the Ande\'s Mint".',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 20,
    header: 'Kee Lime Cookie',
    description: 'Delicious Key Lime Cookie.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 21,
    header: 'Missing Flavor',
    description: 'Fresh Berries.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 22,
    header: 'Medley Melons',
    description: 'A blend of Melons and Cucumber.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 23,
    header: 'Mild & Black',
    description: 'Dark Chocolate with rich swirls Creamy Vanilla and Honey fired Tobacco.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 24,
    header: 'Oriental Tobacco',
    description: 'Sweet Caramel Tobacco with Spices.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 25,
    header: 'Pinacolada',
    description: 'Just like the drink!',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 26,
    header: 'Razz Champagne',
    description: 'Fresh picked Raspberries and Champagne',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 27,
    header: 'Razz Cookie',
    description: 'Sweet Raspberry COokie',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 28,
    header: 'Rootbeer',
    description: 'Taste like Rootbeer Float!',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 29,
    header: 'Spicy Cuban',
    description: 'A lush Cuban Tobacco with Cinnamon layered throughout.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 30,
    header: 'Vanilla Cookie',
    description: 'Sweet and Simply Vanilla.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 31,
    header: 'Vanilla Custard',
    description: 'Rich Vanilla with a smooth custard finish.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
  {
    childKey: 32,
    header: 'Water Berry',
    description: 'Watermelon with Sweet Berries.',
    extra: <Rating icon='star' defaultRating={3} maxRating={5} />,
  },
]

const styles = {
  container: {
    margin: 10,
    fontFamily: 'Roboto, sans-serif',
  },
  strong: {
    fontWeight: 'bolder'
  }
}
export default props => (
  <div style={styles.container}>

    <Menu attached='top' stackable>
      <Menu.Item color='teal' onClick={props.back}>
        <Icon name='chevron left' /> Back
      </Menu.Item>
      <Menu.Item >
        <p><span style={styles.strong}>Bottle Sizes (ml):</span> 15, 30, 60, 120</p>
      </Menu.Item>
      <Menu.Item >
        <p><span style={styles.strong}>Nicotine Levels (mg):</span> 0, 3, 6, 9, 12, 18, 24</p>
      </Menu.Item>
    </Menu>

    <Segment attached='bottom'>
      <Item.Group items={items} divided/>
    </Segment>

    
  </div>
)