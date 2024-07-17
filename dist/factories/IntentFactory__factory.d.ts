import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { IntentFactory, IntentFactoryInterface } from "../IntentFactory";
declare type IntentFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IntentFactory__factory extends ContractFactory {
    constructor(...args: IntentFactoryConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<IntentFactory>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): IntentFactory;
    connect(signer: Signer): IntentFactory__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161198938038061198983398101604081905261002f91610092565b600080546001600160a01b0319166001600160a01b03831617905560405161005690610085565b604051809103906000f080158015610072573d6000803e3d6000fd5b506001600160a01b0316608052506100c2565b610c5280610d3783390190565b6000602082840312156100a457600080fd5b81516001600160a01b03811681146100bb57600080fd5b9392505050565b608051610c466100f16000396000818160b701528181610292015281816104e201526105920152610c466000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638760b86b11610076578063926d43eb1161005b578063926d43eb14610150578063e30c397814610163578063f2fde38b1461018357600080fd5b80638760b86b1461011d5780638da5cb5b1461013057600080fd5b806323452b9c146100a85780635c60da1b146100b2578063716b2df9146101025780637200b82914610115575b600080fd5b6100b0610196565b005b6100d97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100b0610110366004610938565b610260565b6100b06103cb565b6100d961012b36600461098c565b6104b1565b6000546100d99073ffffffffffffffffffffffffffffffffffffffff1681565b6100b061015e366004610938565b61050f565b6001546100d99073ffffffffffffffffffffffffffffffffffffffff1681565b6100b06101913660046109d1565b610692565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101e7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610236576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60008360405160200161027391906109ec565b60405160208183030381529060405280519060200120905060006102b77f0000000000000000000000000000000000000000000000000000000000000000836107f0565b6040517ffe0cd20000000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063fe0cd2009061030c9088906004016109ec565b600060405180830381600087803b15801561032657600080fd5b505af115801561033a573d6000803e3d6000fd5b50506040517f6568a27900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169250636568a27991506103929087908790600401610a42565b600060405180830381600087803b1580156103ac57600080fd5b505af11580156103c0573d6000803e3d6000fd5b505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461041d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600080826040516020016104c591906109ec565b6040516020818303038152906040528051906020012090506105087f000000000000000000000000000000000000000000000000000000000000000082306107fe565b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610560576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008360405160200161057391906109ec565b60405160208183030381529060405280519060200120905060006105b77f0000000000000000000000000000000000000000000000000000000000000000836107f0565b6040517ffe0cd20000000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063fe0cd2009061060c9088906004016109ec565b600060405180830381600087803b15801561062657600080fd5b505af115801561063a573d6000803e3d6000fd5b50506040517f3f707e6b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169250633f707e6b91506103929087908790600401610a9b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106e3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610730576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361077f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006105086000848461085b565b6000806108458560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b90506108528185856108b2565b95945050505050565b60006c5af43d3d93803e602a57fd5bf36021528260145273602c3d8160093d39f33d3d3d3d363d3d37363d73600052816035600c86f59050806108a65763301164256000526004601cfd5b60006021529392505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b6000608082840312156108e657600080fd5b50919050565b60008083601f8401126108fe57600080fd5b50813567ffffffffffffffff81111561091657600080fd5b6020830191508360208260051b850101111561093157600080fd5b9250929050565b600080600060a0848603121561094d57600080fd5b61095785856108d4565b9250608084013567ffffffffffffffff81111561097357600080fd5b61097f868287016108ec565b9497909650939450505050565b60006080828403121561099e57600080fd5b61050883836108d4565b803573ffffffffffffffffffffffffffffffffffffffff811681146109cc57600080fd5b919050565b6000602082840312156109e357600080fd5b610508826109a8565b8135815260808101610a00602084016109a8565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610a2a604087016109a8565b16604085015250506060830135606083015292915050565b60208082528181018390526000908460408401835b86811015610a905773ffffffffffffffffffffffffffffffffffffffff610a7d846109a8565b1682529183019190830190600101610a57565b509695505050505050565b60208082528181018390526000906040808401600586901b8501820187855b88811015610c02577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18b3603018112610b1b57600080fd5b8a01606073ffffffffffffffffffffffffffffffffffffffff610b3d836109a8565b1685528782013588860152868201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1833603018112610b7c57600080fd5b90910187810191903567ffffffffffffffff811115610b9a57600080fd5b803603831315610ba957600080fd5b8188870152808287015260809150808383880137600086820183015295880195601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909401909301925090850190600101610aba565b50909897505050505050505056fea264697066735822122069ba02c5f35f2fb74b4baf330645bda4dae519d477c8ac5d675756147c3ba05f64736f6c6343000811003360a06040526006805460ff1916905534801561001a57600080fd5b5030608052608051610c116100416000396000818161012a01526106eb0152610c116000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80636568a27911610081578063d0202d3b1161005b578063d0202d3b146101ad578063f7260d3e146101cd578063fe0cd200146101ed57600080fd5b80636568a27914610171578063bfa0b13314610184578063c45a01551461018d57600080fd5b806331a38c89116100b257806331a38c89146100f35780633f707e6b146101105780635c60da1b1461012557600080fd5b80630ada1b8a146100ce5780632c3bfc08146100ea575b600080fd5b6100d760005481565b6040519081526020015b60405180910390f35b6100d760055481565b6006546101009060ff1681565b60405190151581526020016100e1565b61012361011e366004610986565b610200565b005b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e1565b61012361017f366004610986565b610546565b6100d760015481565b60035461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b60045461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b60025461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b6101236101fb3660046109c8565b610669565b60035473ffffffffffffffffffffffffffffffffffffffff163314610251576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065460ff161561028e576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b818110156104065760008383838181106102d8576102d86109e0565b90506020028101906102ea9190610a0f565b6102f8906020810190610a76565b73ffffffffffffffffffffffffffffffffffffffff16848484818110610320576103206109e0565b90506020028101906103329190610a0f565b60200135858585818110610348576103486109e0565b905060200281019061035a9190610a0f565b610368906040810190610a98565b604051610376929190610afd565b60006040518083038185875af1925050503d80600081146103b3576040519150601f19603f3d011682016040523d82523d6000602084013e6103b8565b606091505b50509050806103f3576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50806103fe81610b0d565b9150506102bc565b50600554600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610479573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049d9190610b6c565b10156104d5576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045473ffffffffffffffffffffffffffffffffffffffff16610518576002546105149073ffffffffffffffffffffffffffffffffffffffff1661081b565b5050565b6004546002546105419173ffffffffffffffffffffffffffffffffffffffff908116911661083a565b505050565b60035473ffffffffffffffffffffffffffffffffffffffff163314610597576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156105415760008383838181106105b6576105b66109e0565b90506020020160208101906105cb9190610a76565b73ffffffffffffffffffffffffffffffffffffffff160361060d576002546106089073ffffffffffffffffffffffffffffffffffffffff1661081b565b610657565b610655838383818110610622576106226109e0565b90506020020160208101906106379190610a76565b60025473ffffffffffffffffffffffffffffffffffffffff1661083a565b505b8061066181610b0d565b91505061059a565b8060405160200161067a9190610b85565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001633908117909155600091610711917f000000000000000000000000000000000000000000000000000000000000000091906108bb565b90503073ffffffffffffffffffffffffffffffffffffffff821614610762576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556107776040830160208401610a76565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556107cc6060830160408401610a76565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060600135600555565b60003860003847855af16108375763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d111661086a576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166108b0576390b8ec186000526004601cfd5b600060345292915050565b6000806109028560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b905061090f818585610918565b95945050505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b60008083601f84011261094c57600080fd5b50813567ffffffffffffffff81111561096457600080fd5b6020830191508360208260051b850101111561097f57600080fd5b9250929050565b6000806020838503121561099957600080fd5b823567ffffffffffffffff8111156109b057600080fd5b6109bc8582860161093a565b90969095509350505050565b6000608082840312156109da57600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610a4357600080fd5b9190910192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a7157600080fd5b919050565b600060208284031215610a8857600080fd5b610a9182610a4d565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610acd57600080fd5b83018035915067ffffffffffffffff821115610ae857600080fd5b60200191503681900382131561097f57600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b65577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610b7e57600080fd5b5051919050565b8135815260808101610b9960208401610a4d565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610bc360408701610a4d565b1660408501525050606083013560608301529291505056fea2646970667358221220c4f104ca9f96ecff9f373e18851a5be48f72b15fb1a695e51413c716ac95692164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployAndExecuteIntent";
        readonly inputs: readonly [{
            readonly name: "_initData";
            readonly type: "tuple";
            readonly internalType: "struct IIntent.InitData";
            readonly components: readonly [{
                readonly name: "intentId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IIntent.Call[]";
            readonly components: readonly [{
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployAndWithdrawAll";
        readonly inputs: readonly [{
            readonly name: "_initData";
            readonly type: "tuple";
            readonly internalType: "struct IIntent.InitData";
            readonly components: readonly [{
                readonly name: "intentId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "tokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getIntentAddress";
        readonly inputs: readonly [{
            readonly name: "_initData";
            readonly type: "tuple";
            readonly internalType: "struct IIntent.InitData";
            readonly components: readonly [{
                readonly name: "intentId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "implementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): IntentFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IntentFactory;
}
export {};
