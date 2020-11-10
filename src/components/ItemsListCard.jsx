import React from 'react';
import { Link } from '@reach/router';
require('dotenv').config();

const ItemsListCard = (props) => {
  console.log(process.env);
  return (
    <section className="itemsList">
      <picture>
        <Link to={`/item/${props.item.item_id}`} item={props.item}>
          <img
            className="thumbnailImageStyle"
            src={`${process.env.REACT_APP_S3_BUCKET}/${props.item.thumbnail_img_ref}`}
            alt="the item"
          ></img>
        </Link>
      </picture>
      <div className="itemsListTitle">
        <p>{props.item.category}</p>
        <Link
          className="itemsListTitle"
          to={`/item/${props.item.item_id}`}
          item={props.item}
        >
          <p className="itemsListTitle">{props.item.title}</p>
        </Link>
        <p>
          Seller: <em>{props.item.seller_username}</em>
        </p>
      </div>
      <div className="itemsListPrice">
        <Link
          className="itemsListPrice"
          to={`/item/${props.item.item_id}`}
          item={props.item}
        >
          <p> £{props.item.price}</p>
        </Link>
      </div>
    </section>
  );
};

export default ItemsListCard;
