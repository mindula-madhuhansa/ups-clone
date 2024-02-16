import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ORDERS } from "../graphql/queries";

const userOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
      Address: value.Address,
      City: value.City,
      Lng: value.Lng,
      Lat: value.Lat,
    }));

    setOrders(orders);
  }, [data]);

  return { loading, error, orders };
};

export default userOrders;
