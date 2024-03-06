export type Transaction = {
  __typename: string;
  _id: string;
  description: string;
  paymentType: string;
  category: "saving" | "expense" | "investment";
  amount: number;
  location: string;
  date: string;
};
