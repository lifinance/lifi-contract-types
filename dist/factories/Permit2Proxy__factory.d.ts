import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";
declare type Permit2ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2Proxy__factory extends ContractFactory {
    constructor(...args: Permit2ProxyConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Permit2Proxy>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Permit2Proxy;
    connect(signer: Signer): Permit2Proxy__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002123380380620021238339810160408190526200003491620000dc565b600080546001600160a01b0319166001600160a01b038481169190911790915581166080526040805160a081019091526064808252620020bf60208301396040518060c00160405280609181526020016200202e609191396040516020016200009f9291906200014d565b60408051601f19818403018152919052805160209091012060a052506200016e9050565b6001600160a01b0381168114620000d957600080fd5b50565b60008060408385031215620000f057600080fd5b8251620000fd81620000c3565b60208401519092506200011081620000c3565b809150509250929050565b6000815160005b818110156200013e576020818501810151868301520162000122565b50600093019283525090919050565b6000620001666200015f83866200011b565b846200011b565b949350505050565b60805160a051611e85620001a9600039600081816102a601526108710152600081816101eb015281816107de01526109f70152611e856000f3fe6080604052600436106100dd5760003560e01c80637200b8291161007f578063aeef37de11610059578063aeef37de14610294578063cdf8b429146102c8578063e30c3978146102db578063f2fde38b1461030857600080fd5b80637200b829146102325780638da5cb5b1461024757806397fc4c2b1461027457600080fd5b806333320de3116100bb57806333320de3146101665780633e1f3e691461018657806356ee2b50146101995780636afdd850146101d957600080fd5b8063156e2152146100e257806323452b9c1461010d5780632c03ae6a14610124575b600080fd5b3480156100ee57600080fd5b506100f7610328565b60405161010491906117d4565b60405180910390f35b34801561011957600080fd5b50610122610344565b005b34801561013057600080fd5b506101587f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd81565b604051908152602001610104565b34801561017257600080fd5b5061012261018136600461183a565b61040e565b610122610194366004611911565b61055b565b3480156101a557600080fd5b506101c96101b43660046119b8565b60026020526000908152604090205460ff1681565b6040519015158152602001610104565b3480156101e557600080fd5b5061020d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610104565b34801561023e57600080fd5b50610122610667565b34801561025357600080fd5b5060005461020d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561028057600080fd5b5061015861028f3660046119d3565b61074d565b3480156102a057600080fd5b506101587f000000000000000000000000000000000000000000000000000000000000000081565b6101226102d6366004611a53565b610936565b3480156102e757600080fd5b5060015461020d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561031457600080fd5b506101226103233660046119b8565b610b32565b6040518060c0016040528060918152602001611dbf6091913981565b60005473ffffffffffffffffffffffffffffffffffffffff163314610395576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103e4576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461045f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156105175782828281811061047c5761047c611b23565b90506020020160208101906104919190611b63565b600260008787858181106104a7576104a7611b23565b90506020020160208101906104bc91906119b8565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055600101610462565b507faa9b4ef90f4ce69eff58dfa82ee849c9d5063df771c1320a024b5a9fb67225438484848460405161054d9493929190611b80565b60405180910390a150505050565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018990526064810188905260ff8716608482015260a4810186905260c4810185905273ffffffffffffffffffffffffffffffffffffffff8a169063d505accf9060e401600060405180830381600087803b1580156105ed57600080fd5b505af1158015610601573d6000803e3d6000fd5b505050506106118933308b610c90565b61061c89848a610eaa565b61065c8383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ff292505050565b505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106b9576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490526000908161078482611109565b9050600060405180604001604052808c73ffffffffffffffffffffffffffffffffffffffff1681526020018b8b6040516107bf929190611c1b565b6040518091039020815250905060006107d782611189565b90506109267f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa158015610847573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086b9190611c2b565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9c9b505050505050505050505050565b600060405180604001604052808973ffffffffffffffffffffffffffffffffffffffff168152602001888860405161096f929190611c1b565b6040518091039020815250905060007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd826040516020016109dd929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8660405180604001604052803073ffffffffffffffffffffffffffffffffffffffff168152602001896000016020013581525089856040518060c0016040528060918152602001611dbf609191398a8a6040518863ffffffff1660e01b8152600401610aa39796959493929190611c8d565b600060405180830381600087803b158015610abd57600080fd5b505af1158015610ad1573d6000803e3d6000fd5b50610af29250610ae791505060208701876119b8565b8a6020880135610eaa565b61065c8989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ff292505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b83576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610bd0576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610c1f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff8416610cdd576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d2a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbf9190611c2b565b9050610dcd828686866111ea565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e619190611c2b565b610e6b9190611d45565b14610ea2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610eca57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f17576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610f8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb09190611c2b565b1015610fed57610fc2838360006112c6565b610fed83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112c6565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205460ff16611051576040517fb21c96b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff16348460405161107a9190611d85565b60006040518083038185875af1925050503d80600081146110b7576040519150601f19603f3d011682016040523d82523d6000602084013e6110bc565b606091505b50915091508161110357806040517f0e971f120000000000000000000000000000000000000000000000000000000081526004016110fa91906117d4565b60405180910390fd5b50505050565b805160208083015160405160009361116c937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd8260405160200161116c929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111039085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611448565b80158061136657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611340573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113649190611c2b565b155b6113f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016110fa565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610fed9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611244565b60006114aa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115579092919063ffffffff16565b90508051600014806114cb5750808060200190518101906114cb9190611da1565b610fed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016110fa565b6060611566848460008561156e565b949350505050565b606082471015611600576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016110fa565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116299190611d85565b60006040518083038185875af1925050503d8060008114611666576040519150601f19603f3d011682016040523d82523d6000602084013e61166b565b606091505b509150915061167c87838387611687565b979650505050505050565b6060831561171d5782516000036117165773ffffffffffffffffffffffffffffffffffffffff85163b611716576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016110fa565b5081611566565b61156683838151156117325781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fa91906117d4565b60005b83811015611781578181015183820152602001611769565b50506000910152565b600081518084526117a2816020860160208601611766565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006117e7602083018461178a565b9392505050565b60008083601f84011261180057600080fd5b50813567ffffffffffffffff81111561181857600080fd5b6020830191508360208260051b850101111561183357600080fd5b9250929050565b6000806000806040858703121561185057600080fd5b843567ffffffffffffffff8082111561186857600080fd5b611874888389016117ee565b9096509450602087013591508082111561188d57600080fd5b5061189a878288016117ee565b95989497509550505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146118ca57600080fd5b919050565b60008083601f8401126118e157600080fd5b50813567ffffffffffffffff8111156118f957600080fd5b60208301915083602082850101111561183357600080fd5b60008060008060008060008060006101008a8c03121561193057600080fd5b6119398a6118a6565b985060208a0135975060408a0135965060608a013560ff8116811461195d57600080fd5b955060808a0135945060a08a0135935061197960c08b016118a6565b925060e08a013567ffffffffffffffff81111561199557600080fd5b6119a18c828d016118cf565b915080935050809150509295985092959850929598565b6000602082840312156119ca57600080fd5b6117e7826118a6565b600080600080600080600060c0888a0312156119ee57600080fd5b6119f7886118a6565b9650602088013567ffffffffffffffff811115611a1357600080fd5b611a1f8a828b016118cf565b9097509550611a329050604089016118a6565b969995985093966060810135956080820135955060a0909101359350915050565b6000806000806000806000878903610100811215611a7057600080fd5b611a79896118a6565b9750602089013567ffffffffffffffff80821115611a9657600080fd5b611aa28c838d016118cf565b9099509750879150611ab660408c016118a6565b965060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa084011215611ae857600080fd5b60608b01955060e08b0135925080831115611b0257600080fd5b5050611b108a828b016118cf565b989b979a50959850939692959293505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8015158114611b6057600080fd5b50565b600060208284031215611b7557600080fd5b81356117e781611b52565b6040808252810184905260008560608301825b87811015611bce5773ffffffffffffffffffffffffffffffffffffffff611bb9846118a6565b16825260209283019290910190600101611b93565b5083810360208581019190915285825291508590820160005b86811015611c0e578235611bfa81611b52565b151582529183019190830190600101611be7565b5098975050505050505050565b8183823760009101908152919050565b600060208284031215611c3d57600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061014073ffffffffffffffffffffffffffffffffffffffff80611cb18c6118a6565b16845260208b0135602085015260408b0135604085015260608b01356060850152808a5116608085015250602089015160a0840152611d0860c084018973ffffffffffffffffffffffffffffffffffffffff169052565b8660e084015280610100840152611d218184018761178a565b9050828103610120840152611d37818587611c44565b9a9950505050505050505050565b81810381811115611d7f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b60008251611d97818460208701611766565b9190910192915050565b600060208284031215611db357600080fd5b81516117e781611b5256fe4c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a2646970667358221220db6d5ce17ed00ab2461f7ace1282e10c7dfad131ba5067005117b4e3a10f67c864736f6c634300081100334c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_permit2";
            readonly type: "address";
            readonly internalType: "contract ISignatureTransfer";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PERMIT2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISignatureTransfer";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "PERMIT_WITH_WITNESS_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WITNESS_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WITNESS_TYPE_STRING";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "callDiamondWithEIP2612Signature";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        }, {
            readonly name: "diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "callDiamondWithPermit2SignatureSingle";
        readonly inputs: readonly [{
            readonly name: "_diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_signer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_permit";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple";
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "diamondWhitelist";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPermit2MsgHash";
        readonly inputs: readonly [{
            readonly name: "_diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "msgHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
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
        readonly type: "function";
        readonly name: "updateWhitelist";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
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
        readonly type: "event";
        readonly name: "WhitelistUpdated";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly indexed: false;
            readonly internalType: "bool[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CallToDiamondFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "DiamondAddressNotWhitelisted";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): Permit2ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Permit2Proxy;
}
export {};
