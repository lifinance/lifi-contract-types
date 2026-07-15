import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILiFiVaultWrapper, ILiFiVaultWrapperInterface } from "../ILiFiVaultWrapper";
export declare class ILiFiVaultWrapper__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_vaultWrapperAdmin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_integratorShareBps";
            readonly type: "uint16[4]";
            readonly internalType: "uint16[4]";
        }, {
            readonly name: "_fees";
            readonly type: "tuple";
            readonly internalType: "struct FeeConfig";
            readonly components: readonly [{
                readonly name: "rateBps";
                readonly type: "uint16[4]";
                readonly internalType: "uint16[4]";
            }];
        }, {
            readonly name: "_receivers";
            readonly type: "tuple[]";
            readonly internalType: "struct FeeReceiver[]";
            readonly components: readonly [{
                readonly name: "wallet";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bps";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }];
        }, {
            readonly name: "_accessGate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AccessGateUpdated";
        readonly inputs: readonly [{
            readonly name: "accessGate";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AssetFeeCharged";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "feeAssets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "integratorAssets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DilutionFeeAccrued";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "feeShares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "integratorShares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeeConfigUpdated";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "newRateBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeePoolDistributed";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lifiAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "integratorAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntegratorPayoutRedirected";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token";
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
        readonly name: "PauseSet";
        readonly inputs: readonly [{
            readonly name: "paused";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "by";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ReceiversSet";
        readonly inputs: readonly [{
            readonly name: "receivers";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct FeeReceiver[]";
            readonly components: readonly [{
                readonly name: "wallet";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bps";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "VaultWrapperConfigured";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "underlying";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "adapter";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "vaultWrapperAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AccountNotAllowed";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "AccountSanctioned";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "AdapterDepositShortfall";
        readonly inputs: readonly [{
            readonly name: "expected";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "actual";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "AdapterWithdrawShortfall";
        readonly inputs: readonly [{
            readonly name: "expected";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "actual";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "AssetDecimalsUnavailable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DepositsPaused";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateOutOfBounds";
        readonly inputs: readonly [{
            readonly name: "rateBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "minBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeType";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidIntegratorShareBps";
        readonly inputs: readonly [{
            readonly name: "integratorShareBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiverCount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReceiverBpsSumNot100";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "RenounceDisabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SlippageExceeded";
        readonly inputs: readonly [{
            readonly name: "actual";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bound";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "SupplyBelowMinimum";
        readonly inputs: readonly [{
            readonly name: "supply";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minSupply";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "TransferNotAllowed";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ZeroAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroReceiver";
        readonly inputs: readonly [];
    }];
    static createInterface(): ILiFiVaultWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILiFiVaultWrapper;
}
