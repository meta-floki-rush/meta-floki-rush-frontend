import { usePools } from "@nftvillage/farms-sdk";
import { useInventoryERC1155 } from "@nftvillage/marketplace-sdk";
import { CARD_HANDLER_ADDRESS, POOL_CARD_ADDRESS } from "../../../config/config";
import useStyles from "../Style";
import StakingCard from "./cards/StakingCard";

const NftStaking = () => {
  const classes = useStyles();
  const { loading } = usePools();
  const userNfts = useInventoryERC1155(POOL_CARD_ADDRESS, 15);
  const poolNfts = useInventoryERC1155(POOL_CARD_ADDRESS, 15, undefined, CARD_HANDLER_ADDRESS);

  return (
    <div className={classes.card_Container}>
      {loading || userNfts.loading || poolNfts.loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <StakingCard
            loading={loading || userNfts.loading || poolNfts.loading}
            key={0}
            rarity={1}
            staticApy="720"
            nftPrice={"20000000000000000000000"}
            nftList={userNfts.results?.filter((e) => e.rarity === 1)}
            poolNftList={poolNfts.results}
            // loading={loading}
            poolId={0}
          />
          <StakingCard
            key={1}
            rarity={2}
            staticApy="960"
            nftPrice={"7000000000000000000000000"}
            nftList={userNfts.results?.filter((e) => e.rarity === 2)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={1}
          />
          <StakingCard
            key={2}
            rarity={3}
            staticApy="1200"
            nftPrice={"0.4"}
            nftList={userNfts.results?.filter((e) => e.rarity === 3)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={2}
          />
          <StakingCard
            key={3}
            rarity={4}
            staticApy="1440"
            nftPrice={"0.4"}
            nftList={userNfts.results?.filter((e) => e.rarity === 4)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={3}
          />
          <StakingCard
            key={4}
            rarity={5}
            staticApy="3000"
            nftPrice={"0.4"}
            nftList={userNfts.results?.filter((e) => e.rarity === 5)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={4}
          />
          <StakingCard
            key={5}
            special
            rarity={2}
            staticApy="1000"
            nftPrice={"0.4"}
            nftList={userNfts.results?.filter((e) => e.tokenId === 15)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={5}
          />
          <StakingCard
            key={6}
            rarity={3}
            special
            staticApy="1000"
            nftPrice={"0.4"}
            nftList={userNfts.results?.filter((e) => e.tokenId === 16 || e.tokenId === 17)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={6}
          />
        </>
      )}
    </div>
  );
};

export default NftStaking;
