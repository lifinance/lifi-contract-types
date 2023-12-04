import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Receiver, ReceiverInterface } from "../Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _feeCollector: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _feeCollector: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162001de138038062001de183398101604081905262000034916200009a565b600080546001600160a01b039586166001600160a01b031991821617909155908416608052600380549385169382169390931790925560048054919093169116179055620000f7565b80516001600160a01b03811681146200009557600080fd5b919050565b60008060008060808587031215620000b157600080fd5b620000bc856200007d565b9350620000cc602086016200007d565b9250620000dc604086016200007d565b9150620000ec606086016200007d565b905092959194509250565b608051611cc062000121600039600081816102fd015281816106bf01526108740152611cc06000f3fe6080604052600436106100e15760003560e01c8063a1a5ab1e1161007f578063c5861a0e11610059578063c5861a0e1461031f578063e30c39781461033f578063f2fde38b1461036c578063fd614f411461038c57600080fd5b8063a1a5ab1e146102ab578063ab8236f3146102cb578063c415b95c146102eb57600080fd5b80637200b829116100bb5780637200b8291461021c5780637aacd8f8146102315780637b1f6ab41461025e5780638da5cb5b1461027e57600080fd5b80630517cb76146100ed57806323452b9c1461014457806363f42c8c1461015b57600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5060035461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561015057600080fd5b506101596103ac565b005b34801561016757600080fd5b506101ce6101763660046116b8565b60026020819052600091825260409091208054600182015492820154600383015460048401546005850154600690950154939573ffffffffffffffffffffffffffffffffffffffff9081169593811694929391921687565b6040805197885273ffffffffffffffffffffffffffffffffffffffff9687166020890152948616948701949094526060860192909252608085015260a08401521660c082015260e00161013b565b34801561022857600080fd5b50610159610476565b34801561023d57600080fd5b5060045461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026a57600080fd5b506101596102793660046116d1565b61055c565b34801561028a57600080fd5b5060005461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102b757600080fd5b506101596102c63660046116f3565b610700565b3480156102d757600080fd5b506101596102e6366004611840565b6109c0565b3480156102f757600080fd5b5061011a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561032b57600080fd5b5061015961033a3660046118e4565b610aa7565b34801561034b57600080fd5b5060015461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561037857600080fd5b50610159610387366004611909565b610c9d565b34801561039857600080fd5b506101596103a736600461192d565b610dfb565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103fd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661044c576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104c8576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600082815260026020818152604092839020835160e08101855281548152600182015473ffffffffffffffffffffffffffffffffffffffff90811693820193909352928101548216938301939093526003830154606083015260048301546080830152600583015460a083018190526006909301541660c082015290421015610611576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805160009081526002602081905260408083208381556001810180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915592810180548416905560038101849055600481018490556005810193909355600690920180549091169055517f973ae46339da37e1af29c6c89f54d9e4c059252bb777099bc57512c7e350a6be906106ad9083906119b0565b60405180910390a16106e481602001517f000000000000000000000000000000000000000000000000000000000000000084610ed6565b6106fb81602001518260c001518360600151610ed6565b505050565b6000828152600260208181526040808420815160e08101835281548152600182015473ffffffffffffffffffffffffffffffffffffffff908116948201949094529381015483169184018290526003810154606085015260048101546080850152600581015460a08501526006015490911660c083018190529192916107869190610fb2565b9050428260a0015111156107c6576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160009081526002602081905260408083208381556001810180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915592810180548416905560038101849055600481018490556005810193909355600690920180549091169055517f505337176ae8e324a0fc1404aa8ad34544de1bc2c518729eaaecdfbc5fc221cd906108629084906119b0565b60405180910390a161089d82602001517f00000000000000000000000000000000000000000000000000000000000000008560600135610ed6565b60006108ac6020850185611909565b73ffffffffffffffffffffffffffffffffffffffff1660408501356108d46020870187611a1b565b6040516108e2929190611a87565b60006040518083038185875af1925050503d806000811461091f576040519150601f19603f3d011682016040523d82523d6000602084013e610924565b606091505b505090508061095f576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82608001518261097785604001518660c00151610fb2565b6109819190611a97565b10156109b9576040517fef57784000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a3b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560035473ffffffffffffffffffffffffffffffffffffffff163314610a90576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9b828585611087565b60009055505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610b22576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001808255600084815260026020818152604092839020835160e081018552815481529481015473ffffffffffffffffffffffffffffffffffffffff90811692860192909252918201548116928401929092526003810154606084015260048101546080840152600581015460a0840152600601541660c082018190523314610bd7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805160009081526002602081905260408083208381556001810180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915592810180548416905560038101849055600481018490556005810193909355600690920180549091169055517ff66eb9698438c1c9db674e02f091975984088c9188f50684afd1b41496f75e6e90610c759083908690611ad1565b60405180910390a1610c9481602001518260c001518360600151610ed6565b50600090555050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cee576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d3b576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610d8a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610e76576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560045473ffffffffffffffffffffffffffffffffffffffff163314610ecb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9b828688611087565b73ffffffffffffffffffffffffffffffffffffffff8316610f915760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f4b576040519150601f19603f3d011682016040523d82523d6000602084013e610f50565b606091505b5050905080610f8b576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6106fb73ffffffffffffffffffffffffffffffffffffffff8416838361113f565b600073ffffffffffffffffffffffffffffffffffffffff831615611065576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301528416906370a0823190602401602060405180830381865afa15801561103c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110609190611b60565b61107e565b8173ffffffffffffffffffffffffffffffffffffffff16315b90505b92915050565b6000806000806000878060200190518101906110a39190611b79565b945094509450945094508473ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16146110eb576110eb878488610ed6565b60006110fb8686898688876111cc565b90507f31cc7e99cff0167c064421f2f7ee47715dbf0e4ffefce2dbbd5221efcdf97e7f8160405161112c91906119b0565b60405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526106fb908490611395565b6040805160e0810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c090930182905283517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008b851b8116828401528a851b81166034830152604882018a9052606882018990529387901b9093166088840152609c8084018690528451808503909101815260bc840180865281519183019190912061019c8501865280825273ffffffffffffffffffffffffffffffffffffffff808d1660dc8701908152818d1660fc880190815261011c88018d815261013c89018d815261015c8a018c8152858e1661017c909b019a8b52868a52600298899052988b90208751815593516001850180549187167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790559251978401805498861698841698909817909755516003830155945160048201559451600586015594516006909401805494909516939092169290921790925591517f31cc7e99cff0167c064421f2f7ee47715dbf0e4ffefce2dbbd5221efcdf97e7f906113829084906119b0565b60405180910390a1509695505050505050565b60006113f7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114a99092919063ffffffff16565b90508051600014806114185750808060200190518101906114189190611bd7565b6106fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60606114b884846000856114c0565b949350505050565b606082471015611552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016114a0565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161157b9190611c1d565b60006040518083038185875af1925050503d80600081146115b8576040519150601f19603f3d011682016040523d82523d6000602084013e6115bd565b606091505b50915091506115ce878383876115d9565b979650505050505050565b6060831561166f5782516000036116685773ffffffffffffffffffffffffffffffffffffffff85163b611668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016114a0565b50816114b8565b6114b883838151156116845781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a09190611c39565b6000602082840312156116ca57600080fd5b5035919050565b600080604083850312156116e457600080fd5b50508035926020909101359150565b6000806040838503121561170657600080fd5b82359150602083013567ffffffffffffffff81111561172457600080fd5b83016080818603121561173657600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261178157600080fd5b813567ffffffffffffffff8082111561179c5761179c611741565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156117e2576117e2611741565b816040528381528660208588010111156117fb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461183d57600080fd5b50565b60008060008060008060c0878903121561185957600080fd5b863561ffff8116811461186b57600080fd5b9550602087013567ffffffffffffffff8082111561188857600080fd5b6118948a838b01611770565b965060408901359550606089013591506118ad8261181b565b9093506080880135925060a088013590808211156118ca57600080fd5b506118d789828a01611770565b9150509295509295509295565b600080604083850312156118f757600080fd5b8235915060208301356117368161181b565b60006020828403121561191b57600080fd5b81356119268161181b565b9392505050565b60008060008060008060c0878903121561194657600080fd5b8635955060208701359450604087013561195f8161181b565b9350606087013561196f8161181b565b9250608087013563ffffffff8116811461198857600080fd5b915060a087013567ffffffffffffffff8111156119a457600080fd5b6118d789828a01611770565b60e08101611081828480518252602081015173ffffffffffffffffffffffffffffffffffffffff8082166020850152806040840151166040850152606083015160608501526080830151608085015260a083015160a08501528060c08401511660c085015250505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a5057600080fd5b83018035915067ffffffffffffffff821115611a6b57600080fd5b602001915036819003821315611a8057600080fd5b9250929050565b8183823760009101908152919050565b81810381811115611081577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6101008101611b3d828580518252602081015173ffffffffffffffffffffffffffffffffffffffff8082166020850152806040840151166040850152606083015160608501526080830151608085015260a083015160a08501528060c08401511660c085015250505050565b73ffffffffffffffffffffffffffffffffffffffff831660e08301529392505050565b600060208284031215611b7257600080fd5b5051919050565b600080600080600060a08688031215611b9157600080fd5b8551611b9c8161181b565b6020870151909550611bad8161181b565b6040870151909450611bbe8161181b565b6060870151608090970151959894975095949392505050565b600060208284031215611be957600080fd5b8151801515811461192657600080fd5b60005b83811015611c14578181015183820152602001611bfc565b50506000910152565b60008251611c2f818460208701611bf9565b9190910192915050565b6020815260008251806020840152611c58816040850160208701611bf9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122022908e763976dd85755f4a4d28df62f12e52cbe3eaac93837ea13547cb64a2ea64736f6c63430008110033";
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
        }, {
            readonly name: "_feeCollector";
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
            readonly name: "intentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
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
            readonly name: "intentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
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
            }, {
                readonly name: "feeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "feeCollector";
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
        readonly name: "refundExpiredIntent";
        readonly inputs: readonly [{
            readonly name: "intentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "minAmountOut";
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
                readonly name: "minAmountOut";
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
                readonly name: "minAmountOut";
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
                readonly name: "minAmountOut";
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
                readonly name: "minAmountOut";
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
        readonly name: "BelowMinAmount";
        readonly inputs: readonly [];
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
