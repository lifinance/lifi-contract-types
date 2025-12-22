import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWhitelistManagerFacet, IWhitelistManagerFacetInterface } from "../IWhitelistManagerFacet";
export declare class IWhitelistManagerFacet__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "batchSetContractSelectorWhitelist";
        readonly inputs: readonly [{
            readonly name: "_contracts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_selectors";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }, {
            readonly name: "_whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getAllContractSelectorPairs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "contracts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "selectors";
            readonly type: "bytes4[][]";
            readonly internalType: "bytes4[][]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWhitelistedSelectorsForContract";
        readonly inputs: readonly [{
            readonly name: "_contract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "selectors";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isContractSelectorWhitelisted";
        readonly inputs: readonly [{
            readonly name: "_contract";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setContractSelectorWhitelist";
        readonly inputs: readonly [{
            readonly name: "_contract";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "_whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "ContractSelectorWhitelistChanged";
        readonly inputs: readonly [{
            readonly name: "contractAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "selector";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }, {
            readonly name: "whitelisted";
            readonly type: "bool";
            readonly indexed: true;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): IWhitelistManagerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWhitelistManagerFacet;
}
