import styles from './ProductCard.module.css';
export default function ProductCard({name,price,description,emoji='🎮'}){return <article className={styles.card}><div className={styles.emoji}>{emoji}</div><h3>{name}</h3><p className={styles.description}>{description}</p><strong className={styles.price}>₹{price.toLocaleString('en-IN')}</strong></article>}
