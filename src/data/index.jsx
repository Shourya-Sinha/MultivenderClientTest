import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  ChatDots,
  Coins,
  CreditCard,
  FileText,
  Gear,
  GearSix,
  HeartStraight,
  House,
  Phone,
  SignOut,
  Ticket,
  User,
  Users,
  Lightning,
  Baby,
  ShoppingBag,
} from "phosphor-react";
import Dress from '../assets/dress.svg';
import Invoice from '../assets/invoice.svg';
import PencilRuler from '../assets/pencil-ruler.svg';
import ShirtFolded from '../assets/shirt-folded.svg';

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const SignInPopper=[
  {
    title: "My Orders",
    path:'/my-order',
    icon: <FileText />,
  },
  {
    title: "My Coin",
    path:'/my-coin',
    icon: <Coins />,
  },
  {
    path:'/my-chats',
    title: "Message Center",
    icon: <ChatDots />,
  },
  {
    path:'/my-payment',
    title: "Payment",
    icon: <CreditCard />,
  },
  {
    path:'/my-wishlist',
    title: "Wish List",
    icon: <HeartStraight />,
  },
  {
    path:'/my-coupons',
    title: "My Coupons",
    icon: <Ticket />,
  },
]

const CategoryPopper=[
  {
    title: "Home",
    icon: <House />,
  },
  {
    title: "Men's Clothing",
    icon:  <img src={ShirtFolded} style={{width:17,height:17}} />,
  },
  {
    title: "Groceries",
    icon: <ShoppingBag />,
  },
  {
    title: "Electronics",
    icon: <Lightning />,
  },
  {
    title: "Home Improvment",
    icon: <img src={Invoice} style={{width:17,height:17}} />,
  },
  {
    title: "Women's Clothing",
    icon: <img src={Dress} style={{width:17,height:17}} />,
  },
  {
    title: "Babies & Kids",
    icon: <Baby />,
  },
  {
    title: "Accessories",
    icon: <img src={PencilRuler} style={{width:17,height:17}} />,
  },
]

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  SignInPopper,
  CategoryPopper,
};
