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
        readonly name: "getWhitelistedAddresses";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWhitelistedFunctionSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "selectors";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
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
        readonly name: "isAddressWhitelisted";
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "isFunctionSelectorWhitelisted";
        readonly inputs: readonly [{
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
        readonly name: "isMigrated";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "migrate";
        readonly inputs: readonly [{
            readonly name: "_selectorsToRemove";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }, {
            readonly name: "_contracts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_selectors";
            readonly type: "bytes4[][]";
            readonly internalType: "bytes4[][]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "AddressWhitelisted";
        readonly inputs: readonly [{
            readonly name: "whitelistedAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
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
    }, {
        readonly type: "event";
        readonly name: "FunctionSelectorWhitelistChanged";
        readonly inputs: readonly [{
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
