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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002143380380620021438339810160408190526200003491620000dc565b600080546001600160a01b0319166001600160a01b038481169190911790915581166080526040805160a081019091526064808252620020df60208301396040518060c00160405280609181526020016200204e609191396040516020016200009f9291906200014d565b60408051601f19818403018152919052805160209091012060a052506200016e9050565b6001600160a01b0381168114620000d957600080fd5b50565b60008060408385031215620000f057600080fd5b8251620000fd81620000c3565b60208401519092506200011081620000c3565b809150509250929050565b6000815160005b818110156200013e576020818501810151868301520162000122565b50600093019283525090919050565b6000620001666200015f83866200011b565b846200011b565b949350505050565b60805160a051611ea5620001a9600039600081816102a601526108740152600081816101eb015281816107e101526109fa0152611ea56000f3fe6080604052600436106100dd5760003560e01c80637200b8291161007f578063aeef37de11610059578063aeef37de14610294578063cdf8b429146102c8578063e30c3978146102db578063f2fde38b1461030857600080fd5b80637200b829146102325780638da5cb5b1461024757806397fc4c2b1461027457600080fd5b80632c03ae6a116100bb5780632c03ae6a1461013757806333320de31461017957806356ee2b50146101995780636afdd850146101d957600080fd5b8063156e2152146100e257806323452b9c1461010d5780632ac25eb614610124575b600080fd5b3480156100ee57600080fd5b506100f7610328565b60405161010491906117e2565b60405180910390f35b34801561011957600080fd5b50610122610344565b005b61012261013236600461186e565b61040e565b34801561014357600080fd5b5061016b7f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd81565b604051908152602001610104565b34801561018557600080fd5b5061012261019436600461196c565b61051d565b3480156101a557600080fd5b506101c96101b43660046119d8565b60026020526000908152604090205460ff1681565b6040519015158152602001610104565b3480156101e557600080fd5b5061020d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610104565b34801561023e57600080fd5b5061012261066a565b34801561025357600080fd5b5060005461020d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561028057600080fd5b5061016b61028f3660046119f3565b610750565b3480156102a057600080fd5b5061016b7f000000000000000000000000000000000000000000000000000000000000000081565b6101226102d6366004611a73565b610939565b3480156102e757600080fd5b5060015461020d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561031457600080fd5b506101226103233660046119d8565b610b40565b6040518060c0016040528060918152602001611ddf6091913981565b60005473ffffffffffffffffffffffffffffffffffffffff163314610395576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103e4576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152306024830152604482018a90526064820189905260ff8816608483015260a4820187905260c482018690528b169063d505accf9060e401600060405180830381600087803b1580156104a257600080fd5b505af11580156104b6573d6000803e3d6000fd5b505050506104c68a8a308b610c9e565b6104d18a848a610eb8565b6105118383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061100092505050565b50505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461056e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156106265782828281811061058b5761058b611b43565b90506020020160208101906105a09190611b83565b600260008787858181106105b6576105b6611b43565b90506020020160208101906105cb91906119d8565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055600101610571565b507faa9b4ef90f4ce69eff58dfa82ee849c9d5063df771c1320a024b5a9fb67225438484848460405161065c9493929190611ba0565b60405180910390a150505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106bc576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490526000908161078782611117565b9050600060405180604001604052808c73ffffffffffffffffffffffffffffffffffffffff1681526020018b8b6040516107c2929190611c3b565b6040518091039020815250905060006107da82611197565b90506109297f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa15801561084a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086e9190611c4b565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9c9b505050505050505050505050565b600060405180604001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018888604051610972929190611c3b565b6040518091039020815250905060007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd826040516020016109e0929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8660405180604001604052803073ffffffffffffffffffffffffffffffffffffffff168152602001896000016020013581525089856040518060c0016040528060918152602001611ddf609191398a8a6040518863ffffffff1660e01b8152600401610aa69796959493929190611cad565b600060405180830381600087803b158015610ac057600080fd5b505af1158015610ad4573d6000803e3d6000fd5b50610af59250610aea91505060208701876119d8565b8a6020880135610eb8565b610b358989898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061100092505050565b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b91576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610bde576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610c2d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff8416610ceb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d38576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610da9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcd9190611c4b565b9050610ddb828686866111f8565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6f9190611c4b565b610e799190611d65565b14610eb0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ed857505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f25576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610f9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbe9190611c4b565b1015610ffb57610fd0838360006112d4565b610ffb83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112d4565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205460ff1661105f576040517fb21c96b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1634846040516110889190611da5565b60006040518083038185875af1925050503d80600081146110c5576040519150601f19603f3d011682016040523d82523d6000602084013e6110ca565b606091505b50915091508161111157806040517f0e971f1200000000000000000000000000000000000000000000000000000000815260040161110891906117e2565b60405180910390fd5b50505050565b805160208083015160405160009361117a937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd8260405160200161117a929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111119085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611456565b80158061137457506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561134e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113729190611c4b565b155b611400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401611108565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610ffb9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611252565b60006114b8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115659092919063ffffffff16565b90508051600014806114d95750808060200190518101906114d99190611dc1565b610ffb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401611108565b6060611574848460008561157c565b949350505050565b60608247101561160e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611108565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116379190611da5565b60006040518083038185875af1925050503d8060008114611674576040519150601f19603f3d011682016040523d82523d6000602084013e611679565b606091505b509150915061168a87838387611695565b979650505050505050565b6060831561172b5782516000036117245773ffffffffffffffffffffffffffffffffffffffff85163b611724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611108565b5081611574565b61157483838151156117405781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110891906117e2565b60005b8381101561178f578181015183820152602001611777565b50506000910152565b600081518084526117b0816020860160208601611774565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006117f56020830184611798565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461182057600080fd5b919050565b60008083601f84011261183757600080fd5b50813567ffffffffffffffff81111561184f57600080fd5b60208301915083602082850101111561186757600080fd5b9250929050565b6000806000806000806000806000806101208b8d03121561188e57600080fd5b6118978b6117fc565b99506118a560208c016117fc565b985060408b0135975060608b0135965060808b013560ff811681146118c957600080fd5b955060a08b0135945060c08b013593506118e560e08c016117fc565b92506101008b013567ffffffffffffffff81111561190257600080fd5b61190e8d828e01611825565b915080935050809150509295989b9194979a5092959850565b60008083601f84011261193957600080fd5b50813567ffffffffffffffff81111561195157600080fd5b6020830191508360208260051b850101111561186757600080fd5b6000806000806040858703121561198257600080fd5b843567ffffffffffffffff8082111561199a57600080fd5b6119a688838901611927565b909650945060208701359150808211156119bf57600080fd5b506119cc87828801611927565b95989497509550505050565b6000602082840312156119ea57600080fd5b6117f5826117fc565b600080600080600080600060c0888a031215611a0e57600080fd5b611a17886117fc565b9650602088013567ffffffffffffffff811115611a3357600080fd5b611a3f8a828b01611825565b9097509550611a529050604089016117fc565b969995985093966060810135956080820135955060a0909101359350915050565b6000806000806000806000878903610100811215611a9057600080fd5b611a99896117fc565b9750602089013567ffffffffffffffff80821115611ab657600080fd5b611ac28c838d01611825565b9099509750879150611ad660408c016117fc565b965060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa084011215611b0857600080fd5b60608b01955060e08b0135925080831115611b2257600080fd5b5050611b308a828b01611825565b989b979a50959850939692959293505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8015158114611b8057600080fd5b50565b600060208284031215611b9557600080fd5b81356117f581611b72565b6040808252810184905260008560608301825b87811015611bee5773ffffffffffffffffffffffffffffffffffffffff611bd9846117fc565b16825260209283019290910190600101611bb3565b5083810360208581019190915285825291508590820160005b86811015611c2e578235611c1a81611b72565b151582529183019190830190600101611c07565b5098975050505050505050565b8183823760009101908152919050565b600060208284031215611c5d57600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061014073ffffffffffffffffffffffffffffffffffffffff80611cd18c6117fc565b16845260208b0135602085015260408b0135604085015260608b01356060850152808a5116608085015250602089015160a0840152611d2860c084018973ffffffffffffffffffffffffffffffffffffffff169052565b8660e084015280610100840152611d4181840187611798565b9050828103610120840152611d57818587611c64565b9a9950505050505050505050565b81810381811115611d9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b60008251611db7818460208701611774565b9190910192915050565b600060208284031215611dd357600080fd5b81516117f581611b7256fe4c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a2646970667358221220ef94499282c5146ff208bda19418b702e4709505becc121427b1b6954709bcd364736f6c634300081100334c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
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
            readonly name: "owner";
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
