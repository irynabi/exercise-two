"use client";
import Link from "next/link";
import styles from "./articleCard.module.css";
const ArticleCard = ({date, description, id, imageAlt, imageSrc, title}) => {
    return (
        <div className={styles.articleCard}>
            <div className ={styles.articleCardImg}>
            <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className={styles.articleCardContent}>
                <h2>{title}</h2>
                <p>{date}</p>            
                <p>{description}</p>
                <div className={styles.articleCardButton}>
                    <h4><Link href={`article/${id}`}>Read More!</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;