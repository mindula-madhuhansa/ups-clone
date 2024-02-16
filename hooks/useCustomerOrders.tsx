import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";
import { useEffect, useState } from "react";

export const useCustomerOrders = (userId: string) => {
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

    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
};

export default useCustomerOrders;
