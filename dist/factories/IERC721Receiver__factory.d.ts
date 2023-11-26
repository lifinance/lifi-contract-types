import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC721Receiver, IERC721ReceiverInterface } from "../IERC721Receiver";
export declare class IERC721Receiver__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IERC721ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721Receiver;
}
