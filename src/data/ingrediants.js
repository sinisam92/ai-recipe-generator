import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
export const ingredients = {
  vegetables: {
    id: uuidv4(),
    name: "vegetables",
    slug: "vegetables",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60",
    leafy_greens: {
      id: uuidv4(),
      name: "leafy greens",
      slug: "leafy_greens",
      image:
        "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "spinach",
          slug: "spinach",
          image:
            "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "kale",
          slug: "kale",
          image:
            "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "lettuce",
          slug: "lettuce",
          image:
            "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "arugula",
          slug: "arugula",
          image:
            "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "cabbage",
          slug: "cabbage",
          image:
            "https://images.unsplash.com/photo-1611105637889-3afd7295bdbf?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "swiss chard",
          slug: "swiss_chard",
          image:
            "https://images.unsplash.com/photo-1553536645-f83758b55d23?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "bok choy",
          slug: "bok_choy",
          image:
            "https://cdn.pixabay.com/photo/2024/08/14/11/47/ai-generated-8968386_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "collard greens",
          slug: "collard_greens",
          image:
            "https://images.unsplash.com/photo-1559852925-6a5a7125525b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    root_vegetables: {
      id: uuidv4(),
      name: "root vegetables",
      slug: "root_vegetables",
      image:
        "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "carrot",
          slug: "carrot",
          image:
            "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "beetroot",
          slug: "beetroot",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGCOm-COZLRuzaaKF9uJNtRXBDRt3rNwLgw&s",
        },
        {
          id: uuidv4(),
          name: "radish",
          slug: "radish",
          image:
            "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "potato",
          slug: "potato",
          image:
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "sweet potato",
          slug: "sweet_potato",
          image:
            "https://images.unsplash.com/photo-1596097635121-14b63b7a0c23?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "turnip",
          slug: "turnip",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Turnip_2622027.jpg",
        },
        {
          id: uuidv4(),
          name: "parsnip",
          slug: "parsnip",
          image:
            "https://images.unsplash.com/photo-1515192665289-06a8c3c54343?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    cruciferous: {
      id: uuidv4(),
      name: "cruciferous",
      slug: "cruciferous",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "broccoli",
          slug: "broccoli",
          image:
            "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "cauliflower",
          slug: "cauliflower",
          image:
            "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "brussels sprouts",
          slug: "brussels_sprouts",
          image:
            "https://images.unsplash.com/photo-1438118907704-7718ee9a191a?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "kohlrabi",
          slug: "kohlrabi",
          image:
            "https://cdn.pixabay.com/photo/2018/09/18/12/20/cavolorapa-3686040_1280.jpg",
        },

        {
          id: uuidv4(),
          name: "mustard greens",
          slug: "mustard_greens",
          image:
            "https://media.post.rvohealth.io/wp-content/uploads/2020/03/mustard-greens-leaf-732x549-thumbnail-732x549.jpg",
        },
      ],
    },
    alliums: {
      id: uuidv4(),
      name: "alliums",
      slug: "alliums",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "onion",
          slug: "onion",
          image:
            "https://images.unsplash.com/photo-1508747703725-719777637510?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "garlic",
          slug: "garlic",
          image:
            "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "leek",
          slug: "leek",
          image: "https://cdn.pixabay.com/photo/2016/03/30/19/04/leek-1291340_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "shallot",
          slug: "shallot",
          image:
            "https://plus.unsplash.com/premium_photo-1675365460588-892cd1787f65?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    other: {
      id: uuidv4(),
      name: "other",
      slug: "other",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "zucchini",
          slug: "zucchini",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZ2hJYtaYVZYq1AdkzdUAK3kPZ8hUjFkz7A&s",
        },
        {
          id: uuidv4(),
          name: "eggplant",
          slug: "eggplant",
          image:
            "https://www.bradleysmoker.com/cdn/shop/articles/Smoked-Marinated-Eggplant-Recipe-scaled.jpg?v=1675739133&width=1500",
        },
        {
          id: uuidv4(),
          name: "bell pepper",
          slug: "bell_pepper",
          image:
            "https://www.chilipeppermadness.com/wp-content/uploads/2024/02/Bell-Peppers1.jpg",
        },
        {
          id: uuidv4(),
          name: "tomato",
          slug: "tomato",
          image:
            "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "cucumber",
          slug: "cucumber",
          image:
            "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "artichoke",
          slug: "artichoke",
          image:
            "https://cdn.pixabay.com/photo/2018/05/10/02/20/artichoke-3386681_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "asparagus",
          slug: "asparagus",
          image:
            "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "fennel",
          slug: "fennel",
          image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/fennel.jpg",
        },
        {
          id: uuidv4(),
          name: "okra",
          slug: "okra",
          image:
            "https://cdn.pixabay.com/photo/2018/06/01/09/09/ladys-finger-3445963_1280.jpg",
        },
      ],
    },
  },
  fruit: {
    id: uuidv4(),
    name: "fruit",
    slug: "fruit",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&auto=format&fit=crop&q=60",
    citrus: {
      id: uuidv4(),
      name: "citrus",
      slug: "citrus",
      image:
        "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "orange",
          slug: "orange",
          image:
            "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "lemon",
          slug: "lemon",
          image:
            "https://fruits.today/image/cache/catalog/product/8/Cytryna_ES_05kg-800x800.jpg",
        },
        {
          id: uuidv4(),
          name: "lime",
          slug: "lime",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0gz7lbaXUO3YkyP0uuiO6pL-eH36-CHYhQ&s",
        },
        {
          id: uuidv4(),
          name: "grapefruit",
          slug: "grapefruit",
          image:
            "https://images.unsplash.com/photo-1577041249022-26cc744ddda3?w=500&auto=format&fit=crop&q=60",
        },
      ],
    },
    berries: {
      id: uuidv4(),
      name: "berries",
      slug: "berries",
      image:
        "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "strawberry",
          slug: "strawberry",
          image:
            "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "blueberry",
          slug: "blueberry",
          image:
            "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "raspberry",
          slug: "raspberry",
          image:
            "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "blackberry",
          slug: "blackberry",
          image:
            "https://www.diggers.com.au/cdn/shop/products/wblth_thornless_blackberry_chester_2048x.jpg?v=1658883700",
        },
        {
          id: uuidv4(),
          name: "cranberry",
          slug: "cranberry",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonm1GW2E6YtUcqFX1NLcMsj37JvxTFJn3ww&s",
        },
        {
          id: uuidv4(),
          name: "gooseberry",
          slug: "gooseberry",
          image:
            "https://images.unsplash.com/photo-1588516232897-cea620305e53?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "elderberry",
          slug: "elderberry",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOa9exdQhETy2jjsXBbLCu2uRvnjCGujMSw&s",
        },
      ],
    },
    stone_fruits: {
      id: uuidv4(),
      name: "stone fruits",
      slug: "stone_fruits",
      image:
        "https://cdn.apartmenttherapy.info/image/upload/v1659473833/k/Photo/Tips/2022-07-stone-fruit-guide/Stone-fruit-guide-lead-title.jpg",
      items: [
        {
          id: uuidv4(),
          name: "peach",
          slug: "peach",
          image:
            "https://static.libertyprim.com/files/familles/peche-large.jpg?1574630286",
        },
        {
          id: uuidv4(),
          name: "plum",
          slug: "plum",
          image: "https://fruitboxco.com/cdn/shop/products/plums_800x.jpg?v=1594383302",
        },
        {
          id: uuidv4(),
          name: "cherry",
          slug: "cherry",
          image:
            "https://www.simplyrecipes.com/thmb/qM4OHyTEdSjpHbfhIJAk-fCWK6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-How-Store-Recipes-LEAD-OPTION-04-0bf195d4fee44090a3b4b89b6cfbf3e0.jpg",
        },
        {
          id: uuidv4(),
          name: "apricot",
          slug: "apricot",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/2/2a/Apricot_and_cross_section.jpg",
        },
      ],
    },
    tropical: {
      id: uuidv4(),
      name: "tropical",
      slug: "tropical",
      image:
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "banana",
          slug: "banana",
          image:
            "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "mango",
          slug: "mango",
          image:
            "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "pineapple",
          slug: "pineapple",
          image:
            "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "papaya",
          slug: "papaya",
          image:
            "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "guava",
          slug: "guava",
          image:
            "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "passion fruit",
          slug: "passion_fruit",
          image:
            "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "dragon fruit",
          slug: "dragon_fruit",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/640px-Pitaya_cross_section_ed2.jpg",
        },
      ],
    },
    other: {
      id: uuidv4(),
      name: "other",
      slug: "other",
      image:
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "apple",
          slug: "apple",
          image:
            "https://static.wikia.nocookie.net/the-snack-encyclopedia/images/7/7d/Apple.png/revision/latest?cb=20200706145821",
        },
        {
          id: uuidv4(),
          name: "pear",
          slug: "pear",
          image:
            "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "grape",
          slug: "grape",
          image:
            "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "kiwi",
          slug: "kiwi",
          image:
            "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "fig",
          slug: "fig",
          image:
            "https://images.unsplash.com/photo-1601379760883-1bb497c558c0?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "pomegranate",
          slug: "pomegranate",
          image:
            "https://hips.hearstapps.com/hmg-prod/images/close-up-of-pomegranates-on-table-royalty-free-image-1701801291.jpg?crop=0.655xw:0.985xh;0.148xw,0&resize=640:*",
        },
        {
          id: uuidv4(),
          name: "persimmon",
          slug: "persimmon",
          image:
            "https://images.unsplash.com/photo-1576714047433-c5f32378a30b?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  },
  spices: {
    id: uuidv4(),
    name: "spices",
    slug: "spices",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=500&auto=format&fit=crop&q=60",
    herbs: {
      id: uuidv4(),
      name: "herbs",
      slug: "herbs",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "basil",
          slug: "basil",
          image:
            "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "oregano",
          slug: "oregano",
          image:
            "https://media.post.rvohealth.io/wp-content/uploads/2020/08/oregano-flakes-spoon-thumb.jpg",
        },
        {
          id: uuidv4(),
          name: "parsley",
          slug: "parsley",
          image:
            "https://images.unsplash.com/photo-1633640737481-2e9aabd87033?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "cilantro",
          slug: "cilantro",
          image:
            "https://cdn-prod.medicalnewstoday.com/content/images/articles/277/277627/bunch-of-fresh-coriander-or-cilantro-on-a-wooden-table.jpg",
        },
        {
          id: uuidv4(),
          name: "rosemary",
          slug: "rosemary",
          image:
            "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "dill",
          slug: "dill",
          image:
            "https://cst.brightspotcdn.com/dims4/default/c528ecc/2147483647/strip/true/crop/945x630+128+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FrlmKW9kqWqedxIzYIrlN4s4Bo_c%3D%2F0x0%3A1200x630%2F1200x630%2Ffilters%3Afocal%28600x315%3A601x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F16054826%2Fthinkstockphotos_812127524.jpg",
        },
        {
          id: uuidv4(),
          name: "thyme",
          slug: "thyme",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thyme-Bundle.jpg/640px-Thyme-Bundle.jpg",
        },
        {
          id: uuidv4(),
          name: "sage",
          slug: "sage",
          image:
            "https://images.unsplash.com/photo-1606841610375-7cd2adbadded?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "tarragon",
          slug: "tarragon",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/0efa8442-e587-4f21-ae48-511b25013c03-67b6ec3.jpg",
        },
      ],
    },
    ground_spices: {
      id: uuidv4(),
      name: "ground spices",
      slug: "ground_spices",
      image:
        "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "cinnamon",
          slug: "cinnamon",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Cinnamomum_verum_spices.jpg/1200px-Cinnamomum_verum_spices.jpg",
        },
        {
          id: uuidv4(),
          name: "turmeric",
          slug: "turmeric",
          image:
            "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "paprika",
          slug: "paprika",
          image:
            "https://cdn.pixabay.com/photo/2016/08/03/07/38/paprika-1566052_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "cumin",
          slug: "cumin",
          image:
            "https://images.squarespace-cdn.com/content/v1/52bc612ae4b038e4d94a53e6/6189786f-95c0-402a-9662-aa0743dd5796/Cumin+%284%29.JPG",
        },
        {
          id: uuidv4(),
          name: "ginger",
          slug: "ginger",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/30/2013/06/ginger-80e324d-scaled.jpg",
        },
        {
          id: uuidv4(),
          name: "nutmeg",
          slug: "nutmeg",
          image:
            "https://cdn.britannica.com/77/170777-050-3A754B3D/Nutmeg-seeds-ground-spice.jpg",
        },
        {
          id: uuidv4(),
          name: "coriander",
          slug: "coriander",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/e0f2e690-693d-4539-a203-e5868d04309a-86ece10.jpg",
        },
        {
          id: uuidv4(),
          name: "chili powder",
          slug: "chili_powder",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcl-fV0aka0L4X6IkW8jGo33OvBzqWxrdxA&s",
        },
      ],
    },
    whole_spices: {
      id: uuidv4(),
      name: "whole spices",
      slug: "whole_spices",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "clove",
          slug: "clove",
          image:
            "https://cdn.britannica.com/27/171027-050-7F7889C9/flower-buds-clove-tree.jpg",
        },
        {
          id: uuidv4(),
          name: "cardamom",
          slug: "cardamom",
          image:
            "https://www.6rasa.com/cdn/shop/articles/GreenCardamom_1200x1200_crop_center.jpg?v=1664103015",
        },
        {
          id: uuidv4(),
          name: "star anise",
          slug: "star_anise",
          image:
            "https://images.unsplash.com/photo-1554345795-1243a276630e?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "peppercorn",
          slug: "peppercorn",
          image:
            "https://www.marthastewart.com/thmb/d_OP8kkGMciqxn7R_B2hUMmDXUU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PeppercornPlant-c84c51db19f64c3f882a21aab3bb9ff4.jpg",
        },
        {
          id: uuidv4(),
          name: "bay leaf",
          slug: "bay_leaf",
          image:
            "https://www.foodandwine.com/thmb/xUmB0l8OO7H8IeENsLDiYIyH6Ec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bay-Leaves-Explained-What-to-Do-With-Them-Fresh-or-Dried-FT-BLOG0424-02-bf7d6af2336143dba910f38a80ab408d.jpg",
        },
        {
          id: uuidv4(),
          name: "fennel seeds",
          slug: "fennel_seeds",
          image:
            "https://www.eatingwell.com/thmb/q3wzrT-2Vg0PRdnPfBJItLY0ut4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fennel-seeds-tout-55dbce1248f844f39d5a331b260045dc.jpg",
        },
        {
          id: uuidv4(),
          name: "mustard seeds",
          slug: "mustard_seeds",
          image:
            "https://129588253.cdn6.editmysite.com/uploads/1/2/9/5/129588253/s524522339580092856_p353_i11_w3000.jpeg?width=2560",
        },
        {
          id: uuidv4(),
          name: "saffron",
          slug: "saffron",
          image:
            "https://media.post.rvohealth.io/wp-content/uploads/2020/11/saffron-732x549-thumbnail-732x549.jpg",
        },
      ],
    },
  },
  grains_and_legumes: {
    id: uuidv4(),
    name: "grains and legumes",
    slug: "grains_and_legumes",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60",
    grains: {
      id: uuidv4(),
      name: "grains",
      slug: "grains",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "rice",
          slug: "rice",
          image:
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "quinoa",
          slug: "quinoa",
          image:
            "https://alternativedish.com/wp-content/uploads/2023/07/popped-quinoa-500x375.jpg",
        },
        {
          id: uuidv4(),
          name: "barley",
          slug: "barley",
          image:
            "https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg",
        },
        {
          id: uuidv4(),
          name: "oats",
          slug: "oats",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7mOlqCrD5oiTvaQIyT5D9vWQlQOuw3Io5g&s",
        },
        {
          id: uuidv4(),
          name: "millet",
          slug: "millet",
          image:
            "https://cdn.sanity.io/images/ruord509/production/e08ad90d86aaef415e7a7ad312614314b5094a2f-4752x3168.jpg",
        },
        {
          id: uuidv4(),
          name: "farro",
          slug: "farro",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7dqsKJFxvmY2quqNJm5RaoNbP4D7vQ9WLQ&s",
        },
        {
          id: uuidv4(),
          name: "spelt",
          slug: "spelt",
          image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVrQoVfVI6_G4ZRJxqPGLoK_EKymmJ_8u6HFWeOS_L8ORFXUOjnXzFWPU79ZG2cV3BfjWS0fAoCKv683OyxQ1zCw",
        },
        {
          id: uuidv4(),
          name: "couscous",
          slug: "couscous",
          image:
            "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2021/06/perfect-couscous-square-1200.jpg",
        },
      ],
    },
    legumes: {
      id: uuidv4(),
      name: "legumes",
      slug: "legumes",
      image:
        "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "lentils",
          slug: "lentils",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/3_types_of_lentil.png",
        },
        {
          id: uuidv4(),
          name: "chickpeas",
          slug: "chickpeas",
          image:
            "https://cdn.pixabay.com/photo/2014/07/11/22/52/chickpea-390706_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "black beans",
          slug: "black_beans",
          image:
            "https://cdn.pixabay.com/photo/2012/02/17/15/25/black-beans-14522_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "kidney beans",
          slug: "kidney_beans",
          image:
            "https://cdn.pixabay.com/photo/2021/08/22/09/16/kidney-bean-6564631_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "peas",
          slug: "peas",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT02qjx8I12R1aouaJvkbIRzvCucMJ3DqWCCzZFTPb4rcyKBXPdD9PTKQNv2JfXr8LF_b6wNLOvKByQPSKAGvwLDQ",
        },
        {
          id: uuidv4(),
          name: "navy beans",
          slug: "navy_beans",
          image:
            "https://homecookedroots.com/wp-content/uploads/2024/06/Instant-Pot-Navy-Beans-4.jpg",
        },
        {
          id: uuidv4(),
          name: "mung beans",
          slug: "mung_beans",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iP68WHGrN2HRREGtEA-TCr5aWrwQHdi38sxx6jVm-Sc0WAuQmworwzJkvnMOIsZuvuqKqtfgWrmk7LNt9NN3Ig",
        },
        {
          id: uuidv4(),
          name: "fava beans",
          slug: "fava_beans",
          image:
            "https://www.attainable-sustainable.net/wp-content/uploads/2021/06/fava-bean-hummus-2.jpg",
        },
      ],
    },
  },
  dairy_and_alternatives: {
    id: uuidv4(),
    name: "dairy and alternatives",
    slug: "dairy_and_alternatives",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60",
    dairy: {
      id: uuidv4(),
      name: "dairy",
      slug: "dairy",
      image:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "milk",
          slug: "milk",
          image:
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "cheese",
          slug: "cheese",
          image:
            "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "yogurt",
          slug: "yogurt",
          image:
            "https://images.getrecipekit.com/20240109191538-homemade-yogurt.jpg?aspect_ratio=4:3&quality=90&",
        },
        {
          id: uuidv4(),
          name: "butter",
          slug: "butter",
          image:
            "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=60",
        },

        {
          id: uuidv4(),
          name: "ricotta",
          slug: "ricotta",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ricotta_pugliese.jpg/800px-Ricotta_pugliese.jpg",
        },
        {
          id: uuidv4(),
          name: "feta",
          slug: "feta",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Feta_Greece_2.jpg/640px-Feta_Greece_2.jpg",
        },
        {
          id: uuidv4(),
          name: "sour cream",
          slug: "sour_cream",
          image:
            "https://www.biggerbolderbaking.com/wp-content/uploads/2016/09/1C5A7606.jpg",
        },
      ],
    },
    plant_based: {
      id: uuidv4(),
      name: "plant based",
      slug: "plant_based",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "almond milk",
          slug: "almond_milk",
          image:
            "https://cdn.pixabay.com/photo/2016/08/27/04/00/almond-milk-1623610_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "soy milk",
          slug: "soy_milk",
          image:
            "https://cdn.pixabay.com/photo/2017/04/26/22/24/soy-milk-2263942_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "coconut milk",
          slug: "coconut_milk",
          image: "https://cdn.pixabay.com/photo/2018/01/05/04/44/food-3062139_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "vegan cheese",
          slug: "vegan_cheese",
          image:
            "https://eatplant-based.com/wp-content/uploads/2021/12/Vegan-Cheese-Recipe-Sliceable_0473-1.jpg",
        },
        {
          id: uuidv4(),
          name: "cashew milk",
          slug: "cashew_milk",
          image: "https://cdn.pixabay.com/photo/2016/12/06/18/27/cereal-1887237_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "rice milk",
          slug: "rice_milk",
          image: "https://cdn.pixabay.com/photo/2016/08/11/23/25/glass-1587258_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "oat milk",
          slug: "oat_milk",
          image:
            "https://images.unsplash.com/photo-1574343193689-93e01f51291e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  },
  proteins: {
    id: uuidv4(),
    name: "proteins",
    slug: "proteins",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&auto=format&fit=crop&q=60",
    meat: {
      id: uuidv4(),
      name: "meat",
      slug: "meat",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "chicken",
          slug: "chicken",
          image:
            "https://cdn.pixabay.com/photo/2018/03/09/17/41/chicken-3212144_1280.jpg",
        },
        {
          id: uuidv4(),
          name: "beef",
          slug: "beef",
          image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "pork",
          slug: "pork",
          image:
            "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "lamb",
          slug: "lamb",
          image:
            "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "duck",
          slug: "duck",
          image:
            "https://plus.unsplash.com/premium_photo-1661436777001-bfc42fc35cb7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "turkey",
          slug: "turkey",
          image:
            "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "venison",
          slug: "venison",
          image:
            "https://images.unsplash.com/photo-1626509653291-18d9a934b9db?w=500&auto=format&fit=crop&q=60",
        },
      ],
    },
    seafood: {
      id: uuidv4(),
      name: "seafood",
      slug: "seafood",
      image:
        "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "salmon",
          slug: "salmon",
          image:
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "tuna",
          slug: "tuna",
          image:
            "https://meatnbone.com/cdn/shop/files/YellowfinTunaSteak_CenterCut.jpg?v=1713798319&width=2048",
        },
        {
          id: uuidv4(),
          name: "shrimp",
          slug: "shrimp",
          image:
            "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "crab",
          slug: "crab",
          image:
            "https://seabear.com/cdn/shop/files/SnowCrabMeat_b0dcbcf9-e7cc-4a57-a712-41658dffd723.jpg?v=1689098031&width=800",
        },
        {
          id: uuidv4(),
          name: "mussels",
          slug: "mussels",
          image:
            "https://www.themediterraneandish.com/wp-content/uploads/2022/11/steamed-mussels-recipe-6.jpg",
        },
        {
          id: uuidv4(),
          name: "cod",
          slug: "cod",
          image:
            "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "scallops",
          slug: "scallops",
          image:
            "https://www.seriouseats.com/thmb/ri0nbi3DOSNwBxo-Vp-Xtz-0iAw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__07__20150727-how-to-sear-scallop-recipe-02-b16215f0279549179ee4d302474ea6a8.jpg",
        },
        {
          id: uuidv4(),
          name: "squid",
          slug: "squid",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5XPc_iZ6jOEFTljFlnD16V0_O3Och8C6MA&s",
        },
      ],
    },
    plant_based: {
      id: uuidv4(),
      name: "plant based",
      slug: "plant_based",
      image:
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "tofu",
          slug: "tofu",
          image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "tempeh",
          slug: "tempeh",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tempeh_%288681605421%29.jpg/640px-Tempeh_%288681605421%29.jpg",
        },
        {
          id: uuidv4(),
          name: "seitan",
          slug: "seitan",
          image:
            "https://preview.redd.it/seitan-tofu-roast-i-made-for-lunch-meat-v0-758z1lnwxfxa1.jpg?width=640&crop=smart&auto=webp&s=4d3761fc36fb74b475eff03539cc1f6cac92ceff",
        },
        {
          id: uuidv4(),
          name: "edamame",
          slug: "edamame",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Edamame_by_Zesmerelda_in_Chicago.jpg/1200px-Edamame_by_Zesmerelda_in_Chicago.jpg",
        },
        {
          id: uuidv4(),
          name: "lentil burgers",
          slug: "lentil_burgers",
          image:
            "https://sarahsvegankitchen.com/wp-content/uploads/2023/03/lentil-burgers-stack-scaled-1.jpeg",
        },
        {
          id: uuidv4(),
          name: "jackfruit",
          slug: "jackfruit",
          image:
            "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "chickpea flour",
          slug: "chickpea_flour",
          image:
            "https://images.unsplash.com/photo-1529687891765-e1c10601a14f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  },
  condiments: {
    id: uuidv4(),
    name: "condiments",
    slug: "condiments",
    image:
      "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?w=500&auto=format&fit=crop&q=60",
    sauces_and_pastes: {
      id: uuidv4(),
      name: "sauces and pastes",
      slug: "sauces_and_pastes",
      image:
        "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "soy sauce",
          slug: "soy_sauce",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/800px-Soy_sauce_2.jpg",
        },
        {
          id: uuidv4(),
          name: "tomato paste",
          slug: "tomato_paste",
          image:
            "https://www.foodandwine.com/thmb/NvMiEJBWiBEuWKOHVNLNHpdQtac=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-paste-FT-RECIPE0624-01-d6acf5dd587f44b3bce6c17f8ce4b104.jpg",
        },
        {
          id: uuidv4(),
          name: "mustard",
          slug: "mustard",
          image:
            "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "mayonnaise",
          slug: "mayonnaise",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-QmoR0Pb3QaXHyYxDp9AFDbXry4yo-Aptg&s",
        },
        {
          id: uuidv4(),
          name: "barbecue sauce",
          slug: "barbecue_sauce",
          image:
            "https://www.allrecipes.com/thmb/N3b7R0ApzKN6q0RRLQdmb6KPegQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/51226-a-very-popular-bbq-sauce-DDMFS-4x3-c6e3230c5df240b4937385141cce0b67.jpg",
        },
        {
          id: uuidv4(),
          name: "sriracha",
          slug: "sriracha",
          image: "https://www.biomarket.rs/images/products/1693485360-SRRCH2.jpg",
        },
        {
          id: uuidv4(),
          name: "tahini",
          slug: "tahini",
          image:
            "https://www.nonguiltypleasures.com/wp-content/uploads/2022/03/how-to-make-tahini-feature.jpg",
        },
        {
          id: uuidv4(),
          name: "pesto",
          slug: "pesto",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5yjIvaPalZfosDTyzjcKrL9fGD8UjyTY4g&s",
        },
      ],
    },
    oils_and_vinegars: {
      id: uuidv4(),
      name: "oils and vinegars",
      slug: "oils_and_vinegars",
      image:
        "https://images.unsplash.com/photo-1620577610365-86c411a80a12?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "olive oil",
          slug: "olive_oil",
          image:
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "vegetable oil",
          slug: "vegetable_oil",
          image:
            "https://i5.walmartimages.com/seo/Great-Value-Vegetable-Oil-48-Oz_16c0b5fb-8784-4dce-8f99-ffa356e22bd0.7b4c3302ebad6add2d02589306a0e555.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        },
        {
          id: uuidv4(),
          name: "sesame oil",
          slug: "sesame_oil",
          image:
            "https://i0.wp.com/ecosureoils.com/wp-content/uploads/2023/05/Black-Sesame-Oil-1.jpg?fit=626%2C417&ssl=1",
        },
        {
          id: uuidv4(),
          name: "balsamic vinegar",
          slug: "balsamic_vinegar",
          image:
            "https://www.allrecipes.com/thmb/FcZmtW_tcQOdC6leUIf8VXNo194=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-228418-balsamic-glaze-ddmfs-4x3-505d9e39d2564087a78dfb535662e526.jpg",
        },
        {
          id: uuidv4(),
          name: "apple cider vinegar",
          slug: "apple_cider_vinegar",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43MiaU3HTXQ6LXDoTDu-KIQyDVKInzYR-zg&s",
        },
        {
          id: uuidv4(),
          name: "grapeseed oil",
          slug: "grapeseed_oil",
          image:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/grape-seed-oil-1296x728-feature.jpg?w=1155&h=1528",
        },
        {
          id: uuidv4(),
          name: "rice vinegar",
          slug: "rice_vinegar",
          image: "https://m.media-amazon.com/images/I/71Bz1B1ZaqL._SL1500_.jpg",
        },
        {
          id: uuidv4(),
          name: "white wine vinegar",
          slug: "white_wine_vinegar",
          image:
            "https://digitalcontent.api.tesco.com/v2/media/ghs/472edc43-d83c-4da1-8c34-f1bbb303fb74/fcd4bf88-63de-4730-bca9-aff63e95b0f9_1665911234.jpeg?h=960&w=960",
        },
      ],
    },
  },
  nuts_and_seeds: {
    id: uuidv4(),
    name: "nuts and seeds",
    slug: "nuts_and_seeds",
    image:
      "https://images.unsplash.com/photo-1542990253-a781e04c0082?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tree_nuts: {
      id: uuidv4(),
      name: "tree nuts",
      slug: "tree_nuts",
      image:
        "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "almonds",
          slug: "almonds",
          image:
            "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "walnuts",
          slug: "walnuts",
          image:
            "https://feelgoodfoodie.net/wp-content/uploads/2023/12/How-to-Toast-Walnuts-TIMG.jpg",
        },
        {
          id: uuidv4(),
          name: "cashews",
          slug: "cashews",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidbTREzGojiCK7tPp16WEXlWkkQqvJGQfAA&s",
        },
        {
          id: uuidv4(),
          name: "pistachios",
          slug: "pistachios",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRxSwBRmXH_OyW-QE1Eh8uLZcsN58DqALRA&s",
        },
        {
          id: uuidv4(),
          name: "pecans",
          slug: "pecans",
          image:
            "https://media.post.rvohealth.io/wp-content/uploads/2020/08/pecans-732x549-thumbnail.jpg",
        },
        {
          id: uuidv4(),
          name: "macadamia",
          slug: "macadamia",
          image: "https://natureclaim.com/images/macadamianut.webp",
        },
      ],
    },
    seeds: {
      id: uuidv4(),
      name: "seeds",
      slug: "seeds",
      image:
        "https://images.unsplash.com/photo-1574587415703-051f8e7e2d94?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "pumpkin seeds",
          slug: "pumpkin_seeds",
          image:
            "https://plus.unsplash.com/premium_photo-1723874550998-f72f9d3f0b16?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "sunflower seeds",
          slug: "sunflower_seeds",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LIMAHvovG6ZFyrVnFzkEHkVIt8ux2PfBow&s",
        },
        {
          id: uuidv4(),
          name: "chia seeds",
          slug: "chia_seeds",
          image:
            "https://www.drweil.com/wp-content/uploads/2018/05/Can-Chia-Help-With-Weight-Loss_-531657339.jpg",
        },
        {
          id: uuidv4(),
          name: "flax seeds",
          slug: "flax_seeds",
          image: "https://files.nccih.nih.gov/flaxseed-steven-foster-square.jpg",
        },
        {
          id: uuidv4(),
          name: "sesame seeds",
          slug: "sesame_seeds",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/8/MS/TO/OO/144603420/sesame-seeds-53-500x500.jpeg",
        },
      ],
    },
  },
  sweeteners: {
    id: uuidv4(),
    name: "sweeteners",
    slug: "sweeteners",
    image:
      "https://images.unsplash.com/photo-1665473052284-164335672208?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    natural: {
      id: uuidv4(),
      name: "natural",
      slug: "natural",
      image:
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "honey",
          slug: "honey",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/honey-pot-4d7c98d.jpg?quality=90&resize=556,505",
        },
        {
          id: uuidv4(),
          name: "maple syrup",
          slug: "maple_syrup",
          image:
            "https://i.cbc.ca/1.5913747.1706541523!/cumulusImage/httpImage/maple-syrup-shutterstock.jpg",
        },
        {
          id: uuidv4(),
          name: "agave nectar",
          slug: "agave_nectar",
          image: "https://m.media-amazon.com/images/I/71kR66ziMAL.jpg",
        },
        {
          id: uuidv4(),
          name: "coconut sugar",
          slug: "coconut_sugar",
          image: "https://nuttyyogi.com/cdn/shop/products/Coconut_Suger.jpg?v=1716888510",
        },
      ],
    },
    processed: {
      id: uuidv4(),
      name: "processed",
      slug: "processed",
      image:
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "white sugar",
          slug: "white_sugar",
          image:
            "https://images.ctfassets.net/3s5io6mnxfqz/4ZkVUG6sFkhhl9M6cHMaow/8d7ffcc5d6cf289b5a642de92887a839/AdobeStock_56514025.jpeg",
        },
        {
          id: uuidv4(),
          name: "brown sugar",
          slug: "brown_sugar",
          image:
            "https://www.allrecipes.com/thmb/S1C60Q_DsYjICElhf7kpez4PgWM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230511_LightorDarkBrownSugar_ddmfs_2x1_2405-60155b2401074400ad2fa0042772a532.jpg",
        },
        {
          id: uuidv4(),
          name: "powdered sugar",
          slug: "powdered_sugar",
          image:
            "https://cdn.loveandlemons.com/wp-content/uploads/2021/02/powdered-sugar.jpg",
        },
        {
          id: uuidv4(),
          name: "corn syrup",
          slug: "corn_syrup",
          image: "https://m.media-amazon.com/images/I/81p2YN6W8jL._SL1500_.jpg",
        },
      ],
    },
  },
  beverages: {
    id: uuidv4(),
    name: "beverages",
    slug: "beverages",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60",
    hot: {
      id: uuidv4(),
      name: "hot",
      slug: "hot",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "coffee",
          slug: "coffee",
          image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "tea",
          slug: "tea",
          image:
            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "hot chocolate",
          slug: "hot_chocolate",
          image:
            "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "herbal tea",
          slug: "herbal_tea",
          image:
            "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&auto=format&fit=crop&q=60",
        },
      ],
    },
    cold: {
      id: uuidv4(),
      name: "cold",
      slug: "cold",
      image:
        "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "ice tea",
          slug: "ice_tea",
          image:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "lemonade",
          slug: "lemonade",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapYpLAwHHzBW37OfOrSMjw_kD5rJZCMD4Mg&s",
        },
        {
          id: uuidv4(),
          name: "fruit juice",
          slug: "fruit_juice",
          image:
            "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: uuidv4(),
          name: "smoothie",
          slug: "smoothie",
          image:
            "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=500&auto=format&fit=crop&q=60",
        },
      ],
    },
  },
  baking_essentials: {
    id: uuidv4(),
    name: "baking essentials",
    slug: "baking_essentials",
    image:
      "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    flours: {
      id: uuidv4(),
      name: "flours",
      slug: "flours",
      image:
        "https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "all purpose flour",
          slug: "all_purpose_flour",
          image: "https://m.media-amazon.com/images/I/81be15nEnmL.jpg",
        },
        {
          id: uuidv4(),
          name: "whole wheat flour",
          slug: "whole_wheat_flour",
          image:
            "https://cdn11.bigcommerce.com/s-ihwnd7z21q/images/stencil/1280x1280/products/1261/5730/king-arthur-premium-100-whole-wheat-flour-5-lb-1__55463__14688.1724079462.jpg?c=1",
        },
        {
          id: uuidv4(),
          name: "almond flour",
          slug: "almond_flour",
          image:
            "https://minimalistbaker.com/wp-content/uploads/2019/05/How-to-Make-Almond-Flour-SQUARE.jpg",
        },
        {
          id: uuidv4(),
          name: "coconut flour",
          slug: "coconut_flour",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/30/2018/12/coconut-flour-2bbbf1d.jpg?resize=768,574",
        },
      ],
    },
    leavening_agents: {
      id: uuidv4(),
      name: "leavening agents",
      slug: "leavening_agents",
      image:
        "https://images.unsplash.com/photo-1615485290398-719f9550d252?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "baking powder",
          slug: "baking_powder",
          image:
            "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "baking soda",
          slug: "baking_soda",
          image:
            "https://images.unsplash.com/photo-1591274603033-b63d98dd3b2e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: uuidv4(),
          name: "yeast",
          slug: "yeast",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/yeast-7f0fc7c.jpg",
        },
      ],
    },
    extracts: {
      id: uuidv4(),
      name: "extracts",
      slug: "extracts",
      image:
        "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=500&auto=format&fit=crop&q=60",
      items: [
        {
          id: uuidv4(),
          name: "vanilla extract",
          slug: "vanilla_extract",
          image:
            "https://growagoodlife.com/wp-content/uploads/2021/10/vanilla-extract-featured.jpg",
        },
        {
          id: uuidv4(),
          name: "almond extract",
          slug: "almond_extract",
          image:
            "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fa4857bea217b18ac59907c478e5ccce334e0210c",
        },
        {
          id: uuidv4(),
          name: "peppermint extract",
          slug: "peppermint_extract",
          image:
            "https://shop.mccormick.com/cdn/shop/files/lurfczrfjvh6jm2wyxcy_1b9b2689-b170-447e-b720-d5fc0cfb3d25.png?v=1728683160",
        },
      ],
    },
  },
};
