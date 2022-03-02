import {
  ApiResponse,
  AssetType,
  Order,
  OrderData,
  OrderSide,
  SaleKind,
  useSellOrder,
} from "@nftvillage/marketplace-sdk";
import { toUpperUnit, useERC1155Approval, useEthers, ZERO_ADDRESS } from "@react-dapp/utils";
import { useWallet } from "@react-dapp/wallet";
import { splitSignature } from "ethers/lib/utils";
import { useState } from "react";
import useLoading from "./useLoading";

const useCreateOrder = (asset: string) => {
  const { account } = useWallet();
  const { create, isApproved, approve } = useSellOrder(asset);
  const { signer } = useEthers();
  const { startLoading, stopLoading } = useLoading();

  const createERC1155Order = async ({
    metadata,
    assetAmount,
    tokenId,
    price,
  }: {
    metadata: any;
    assetAmount: number;
    tokenId: number;
    price: number;
  }) => {
    startLoading();
    let ord: Order = {
      order: {
        asset,
        assetId: tokenId,
        maker: account || "",
        side: OrderSide.SELL,
        assetType: AssetType.ERC1155,
        saleKind: SaleKind.BUYNOW,
        basePrice: price.toString(),
        assetAmount,
      },
      metadata: {
        ...metadata,
        collectionName: "MetaFlokiRushNFT",
        makerAddress: account || "",
      },
    };
    if (!isApproved) {
      let res = await approve(asset);
      if (!res) return;
    }
    let res = await create(ord);
    stopLoading();
    if (res?.status) window.location.reload();
    return res;
  };

  return { createERC1155Order, isApproved };
};

export default useCreateOrder;
