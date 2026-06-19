import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC4626, ERC4626Interface } from "../ERC4626";
export declare class ERC4626__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "asset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToAssets";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToShares";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "maxDeposit";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxMint";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxRedeem";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxWithdraw";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "previewDeposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewMint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewRedeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewWithdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalAssets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deposit";
        readonly inputs: readonly [{
            readonly name: "by";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdraw";
        readonly inputs: readonly [{
            readonly name: "by";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AllowanceOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AllowanceUnderflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DepositMoreThanMax";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAllowance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPermit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MintMoreThanMax";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PermitExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "RedeemMoreThanMax";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TotalSupplyOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawMoreThanMax";
        readonly inputs: readonly [];
    }];
    static createInterface(): ERC4626Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626;
}
