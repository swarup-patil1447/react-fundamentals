import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductPage from './pages/ProductPage.jsx';
import PropsStatePage from './pages/PropsStatePage.jsx';
import TodoPage from './pages/TodoPage.jsx';
export default function App(){return <div className="app-shell">
<header className="site-header"><div><strong>Swarup Patil</strong><span>Week 2 · React Fundamentals</span></div><nav><NavLink to="/">Home</NavLink><NavLink to="/product">Product</NavLink><NavLink to="/props-state">Props & State</NavLink><NavLink to="/todo">To-Do App</NavLink></nav></header>
<main className="page-wrap"><Routes><Route path="/" element={<Home/>}/><Route path="/product" element={<ProductPage/>}/><Route path="/props-state" element={<PropsStatePage/>}/><Route path="/todo" element={<TodoPage/>}/><Route path="*" element={<section className="panel"><h2>Page not found</h2><NavLink to="/">Return home</NavLink></section>}/></Routes></main>
<footer className="site-footer">Built for Week 2 React Fundamentals · Swarup Patil</footer></div>}
