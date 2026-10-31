import {useState} from 'react';
import styles from './Counter.module.css';
export default function Counter({label='Likes'}){const [count,setCount]=useState(0);return <div className={styles.box}><p><strong>{label}:</strong> {count}</p><button className="primary-btn" onClick={()=>setCount(count+1)}>Increase</button><button className="secondary-btn" onClick={()=>setCount(Math.max(0,count-1))}>Decrease</button><button className="secondary-btn" onClick={()=>setCount(0)}>Reset</button></div>}
