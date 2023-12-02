import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Receiver, ReceiverInterface } from "../../ReceiverV2.sol/Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001aef38038062001aef833981016040819052620000349162000094565b600080546001600160a01b039485166001600160a01b031991821617909155600380549385169382169390931790925560048054919093169116179055620000de565b80516001600160a01b03811681146200008f57600080fd5b919050565b600080600060608486031215620000aa57600080fd5b620000b58462000077565b9250620000c56020850162000077565b9150620000d56040850162000077565b90509250925092565b611a0180620000ee6000396000f3fe6080604052600436106100d65760003560e01c8063ab8236f31161007f578063e1788fca11610059578063e1788fca146102d5578063e30c3978146102f5578063f2fde38b14610322578063fd614f411461034257600080fd5b8063ab8236f314610275578063b869acb014610295578063d1fb59a0146102b557600080fd5b80637200b829116100b05780637200b829146102065780637aacd8f81461021b5780638da5cb5b1461024857600080fd5b80630517cb76146100e257806323452b9c1461013957806363f42c8c1461015057600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b5060035461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014557600080fd5b5061014e610362565b005b34801561015c57600080fd5b506101bd61016b3660046113c6565b6002602081905260009182526040909120805460018201549282015460038301546004840154600590940154929473ffffffffffffffffffffffffffffffffffffffff90811694928116939192911686565b6040805196875273ffffffffffffffffffffffffffffffffffffffff958616602088015293851693860193909352606085019190915260808401521660a082015260c001610130565b34801561021257600080fd5b5061014e61042c565b34801561022757600080fd5b5060045461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561025457600080fd5b5060005461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561028157600080fd5b5061014e6102903660046114de565b610512565b3480156102a157600080fd5b5061014e6102b036600461159a565b6105f9565b3480156102c157600080fd5b5061014e6102d03660046115bd565b610704565b3480156102e157600080fd5b5061014e6102f0366004611613565b6108a6565b34801561030157600080fd5b5060015461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032e57600080fd5b5061014e61033d366004611640565b610aa8565b34801561034e57600080fd5b5061014e61035d36600461165d565b610c06565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103b3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610402576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461047e576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161058d576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560035473ffffffffffffffffffffffffffffffffffffffff1633146105e2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105ed828585610cdd565b60009055505050505050565b8060800135421015610637576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61066461064a6040830160208401611640565b61065a60c0840160a08501611640565b8360600135610d8f565b803560009081526002602081905260408083208381556001810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116909155928101805484169055600381018490556004810193909355600590920180549091169055517f976d6b83b369fd5f6b1a51244191616e2b4d3ac651338ca18ff8aec28e5db9e0906106f99083906116e0565b60405180910390a150565b4282608001351115610742576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107516020830183611640565b73ffffffffffffffffffffffffffffffffffffffff166040830135610779602085018561175e565b6040516107879291906117ca565b60006040518083038185875af1925050503d80600081146107c4576040519150601f19603f3d011682016040523d82523d6000602084013e6107c9565b606091505b5050905080610804576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b823560009081526002602081905260408083208381556001810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116909155928101805484169055600381018490556004810193909355600590920180549091169055517f063a8c5b8b4cf0f46aa72d9a6d8f71a1b1c4a61538c923ea19a0470927c95d3e906108999085906116e0565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610921576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553361093660c0850160a08601611640565b73ffffffffffffffffffffffffffffffffffffffff1614610983576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82356000908152600260208181526040808420815160c081018352815480825260018084015473ffffffffffffffffffffffffffffffffffffffff9081168488019081528589015482168588015260038087015460608701908152600480890154608089015260059889015490941660a08801908152958c52988a9052968a208a815592830180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915598830180548a16905595820189905581019790975595909101805490941690935551925190519192610a6692909190610d8f565b7f814c24b5f09282edba3ee7964998671b090d8e958801f34983e622546e5e401a8184604051610a979291906117da565b60405180910390a150600090555050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610af9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610b46576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610b95576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610c81576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560045473ffffffffffffffffffffffffffffffffffffffff163314610cd6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105ed8286885b60008060008086806020019051810190610cf7919061185e565b93509350935093508373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610d3d57610d3d868387610d8f565b6000610d4c8585888686610e70565b90507f689da9da3a661ad5b3904476bf2c789d9403c45eaf5aa3c277d5141aad77b54481604051610d7d91906118b1565b60405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e4a5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610e04576040519150601f19603f3d011682016040523d82523d6000602084013e610e09565b606091505b5050905080610e44576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b610e6b73ffffffffffffffffffffffffffffffffffffffff8416838361101b565b505050565b6040805160c0810182526000808252602080830182905282840182905260608084018390526080840183905260a090930182905283517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a851b81168284015289851b81166034830152604882018990529387901b9093166068840152607c80840186905284518085039091018152609c840180865281519183019190912061015c8501865280825273ffffffffffffffffffffffffffffffffffffffff808c1660bc8701908152818c1660dc880190815260fc88018c815261011c89018b8152848d1661013c909a01998a52858952600297889052978a90208651815592516001840180549186167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790559151968301805497851697831697909717909655945160038201559451600486015594516005909401805494909516939092169290921790925591517f689da9da3a661ad5b3904476bf2c789d9403c45eaf5aa3c277d5141aad77b544906110099084906118b1565b60405180910390a15095945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610e6b9084906000611105826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111b79092919063ffffffff16565b90508051600014806111265750808060200190518101906111269190611918565b610e6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60606111c684846000856111ce565b949350505050565b606082471015611260576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016111ae565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611289919061195e565b60006040518083038185875af1925050503d80600081146112c6576040519150601f19603f3d011682016040523d82523d6000602084013e6112cb565b606091505b50915091506112dc878383876112e7565b979650505050505050565b6060831561137d5782516000036113765773ffffffffffffffffffffffffffffffffffffffff85163b611376576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016111ae565b50816111c6565b6111c683838151156113925781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ae919061197a565b6000602082840312156113d857600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261141f57600080fd5b813567ffffffffffffffff8082111561143a5761143a6113df565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611480576114806113df565b8160405283815286602085880101111561149957600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146114db57600080fd5b50565b60008060008060008060c087890312156114f757600080fd5b863561ffff8116811461150957600080fd5b9550602087013567ffffffffffffffff8082111561152657600080fd5b6115328a838b0161140e565b9650604089013595506060890135915061154b826114b9565b9093506080880135925060a0880135908082111561156857600080fd5b5061157589828a0161140e565b9150509295509295509295565b600060c0828403121561159457600080fd5b50919050565b600060c082840312156115ac57600080fd5b6115b68383611582565b9392505050565b60008060e083850312156115d057600080fd5b6115da8484611582565b915060c083013567ffffffffffffffff8111156115f657600080fd5b83016060818603121561160857600080fd5b809150509250929050565b60008060e0838503121561162657600080fd5b6116308484611582565b915060c0830135611608816114b9565b60006020828403121561165257600080fd5b81356115b6816114b9565b60008060008060008060c0878903121561167657600080fd5b8635955060208701359450604087013561168f816114b9565b9350606087013561169f816114b9565b9250608087013563ffffffff811681146116b857600080fd5b915060a087013567ffffffffffffffff8111156116d457600080fd5b61157589828a0161140e565b8135815260c0810160208301356116f6816114b9565b73ffffffffffffffffffffffffffffffffffffffff9081166020840152604084013590611722826114b9565b8082166040850152606085013560608501526080850135608085015260a0850135915061174e826114b9565b80821660a0850152505092915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261179357600080fd5b83018035915067ffffffffffffffff8211156117ae57600080fd5b6020019150368190038213156117c357600080fd5b9250929050565b8183823760009101908152919050565b60e0810161183b828580518252602081015173ffffffffffffffffffffffffffffffffffffffff808216602085015280604084015116604085015260608301516060850152608083015160808501528060a08401511660a085015250505050565b73ffffffffffffffffffffffffffffffffffffffff831660c08301529392505050565b6000806000806080858703121561187457600080fd5b845161187f816114b9565b6020860151909450611890816114b9565b60408601519093506118a1816114b9565b6060959095015193969295505050565b60c08101611912828480518252602081015173ffffffffffffffffffffffffffffffffffffffff808216602085015280604084015116604085015260608301516060850152608083015160808501528060a08401511660a085015250505050565b92915050565b60006020828403121561192a57600080fd5b815180151581146115b657600080fd5b60005b8381101561195557818101518382015260200161193d565b50506000910152565b6000825161197081846020870161193a565b9190910192915050565b602081526000825180602084015261199981604085016020870161193a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220abfd95d3ea91821f2e44923bb7c4b620f7b8cda99a06d8f4734aea40805feb4464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_sgRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amarokRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "amarokRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "id";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "refundTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
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
        readonly name: "executeIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "id";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "exec";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.IntentExecution";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "refundExpiredIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "id";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sgReceive";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sgRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swapIntents";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "fromAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "toAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
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
        readonly type: "function";
        readonly name: "xReceive";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "ExpiredIntentRefunded";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "id";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentAdded";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "id";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentCancelled";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "id";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "refundedTo";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentExecuted";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "id";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
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
        readonly name: "Expired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
