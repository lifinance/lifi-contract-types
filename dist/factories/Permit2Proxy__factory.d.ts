import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";
type Permit2ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2Proxy__factory extends ContractFactory {
    constructor(...args: Permit2ProxyConstructorParams);
    deploy(_lifiDiamond: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Permit2Proxy>;
    getDeployTransaction(_lifiDiamond: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Permit2Proxy;
    connect(signer: Signer): Permit2Proxy__factory;
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b5060405161235b38038061235b83398101604081905261002e916100d5565b5f80546001600160a01b0319166001600160a01b0383811691909117909155838116608052821660a090815260408051918201905260648082526122f760208301396040518060a00160405280607b815260200161227c607b913960405160200161009a929190610136565b60408051601f19818403018152919052805160209091012060c05250610152915050565b6001600160a01b03811681146100d2575f5ffd5b50565b5f5f5f606084860312156100e7575f5ffd5b83516100f2816100be565b6020850151909350610103816100be565b6040850151909250610114816100be565b809150509250925092565b5f81518060208401855e5f93019283525090919050565b5f61014a610144838661011f565b8461011f565b949350505050565b60805160a05160c0516120b36101c95f395f818161031501526107b401525f81816102a3015281816103ea0152818161072301528181610a2201526113d801525f818161017201528181610467015281816106bb0152818161095101528181610b0e01528181610f5f015261115501526120b35ff3fe60806040526004361061010c575f3560e01c80634561136e116100a15780638da5cb5b11610071578063d7a0847311610057578063d7a0847314610337578063e30c39781461034a578063f2fde38b14610376575f5ffd5b80638da5cb5b146102d9578063aeef37de14610304575f5ffd5b80634561136e146102605780635ebf8b7d146102735780636afdd850146102925780637200b829146102c5575f5ffd5b8063156e2152116100dc578063156e2152146101e65780631608b803146101fa57806323452b9c146102195780632c03ae6a1461022d575f5ffd5b80630193b9fc1461011757806301e3366714610140578063020a1f7d146101615780630cd55abf146101b9575f5ffd5b3661011357005b5f5ffd5b61012a610125366004611928565b610395565b60405161013791906119f6565b60405180910390f35b34801561014b575f5ffd5b5061015f61015a366004611a2c565b6104d8565b005b34801561016c575f5ffd5b506101947f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610137565b3480156101c4575f5ffd5b506101d86101d3366004611a6a565b610647565b604051908152602001610137565b3480156101f1575f5ffd5b5061012a610659565b348015610205575f5ffd5b506101d8610214366004611a85565b610675565b348015610224575f5ffd5b5061015f610878565b348015610238575f5ffd5b506101d87f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77081565b61012a61026e366004611af1565b610941565b34801561027e575f5ffd5b506101d861028d366004611b84565b610b82565b34801561029d575f5ffd5b506101947f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d0575f5ffd5b5061015f610bea565b3480156102e4575f5ffd5b505f546101949073ffffffffffffffffffffffffffffffffffffffff1681565b34801561030f575f5ffd5b506101d87f000000000000000000000000000000000000000000000000000000000000000081565b61012a610345366004611bae565b610cce565b348015610355575f5ffd5b506001546101949073ffffffffffffffffffffffffffffffffffffffff1681565b348015610381575f5ffd5b5061015f610390366004611a6a565b610fc2565b6040805180820182523081526020808601359082015290517f30f28b7a00000000000000000000000000000000000000000000000000000000815260609173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916330f28b7a9161042691889190339089908990600401611cc5565b5f604051808303815f87803b15801561043d575f5ffd5b505af115801561044f573d5f5f3e3d5ffd5b5061049092506104659150506020860186611a6a565b7f0000000000000000000000000000000000000000000000000000000000000000602087013561111e565b6104ce86868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061114f92505050565b9695505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610528576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166105df575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610599576040519150601f19603f3d011682016040523d82523d5f602084013e61059e565b606091505b50509050806105d9576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506105ea565b6105ea83838361121d565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f610653825f5f611368565b92915050565b6040518060a00160405280607b8152602001612003607b913981565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490525f90816106ab826114e2565b90505f60405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018b8b604051610705929190611d35565b604051809103902081525090505f61071c82611561565b90506108697f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa15801561078a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107ae9190611d44565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9b9a5050505050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146108c8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610917576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60605f60405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602001898960405161099b929190611d35565b604051809103902081525090505f7f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77082604051602001610a08929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8760405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018a5f01602001358152508a856040518060a00160405280607b8152602001612003607b91398b8b6040518863ffffffff1660e01b8152600401610acd9796959493929190611d5b565b5f604051808303815f87803b158015610ae4575f5ffd5b505af1158015610af6573d5f5f3e3d5ffd5b50610b379250610b0c9150506020880188611a6a565b7f0000000000000000000000000000000000000000000000000000000000000000602089013561111e565b610b7589898080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061114f92505050565b9998505050505050505050565b5f600882901c827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160ff821601610bc85781610bbd81611e15565b9250505f9050610bd6565b80610bd281611e6f565b9150505b610be1858383611368565b95945050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610c3c576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810187905260ff8616608482015260a4810185905260c4810184905260609073ffffffffffffffffffffffffffffffffffffffff8a169063d505accf9060e4015f604051808303815f87803b158015610d60575f5ffd5b505af1925050508015610d71575060015b610f4d57610d7d611e84565b806308c379a003610e795750610d91611f0d565b80610d9c5750610e7b565b6040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152899073ffffffffffffffffffffffffffffffffffffffff8c169063dd62ed3e90604401602060405180830381865afa158015610e0c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e309190611d44565b1015610e7357806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6a91906119f6565b60405180910390fd5b50610f4d565b505b3d808015610ea4576040519150601f19603f3d011682016040523d82523d5f602084013e610ea9565b606091505b506040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152899073ffffffffffffffffffffffffffffffffffffffff8c169063dd62ed3e90604401602060405180830381865afa158015610f1a573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f3e9190611d44565b1015610e7357610e73816115c1565b610f598933308b6115cb565b610f84897f00000000000000000000000000000000000000000000000000000000000000008a61111e565b610b7583838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061114f92505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611012576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661105f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036110ae576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b61114a8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611687565b505050565b60605f5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1634856040516111999190611fcd565b5f6040518083038185875af1925050503d805f81146111d3576040519150601f19603f3d011682016040523d82523d5f602084013e6111d8565b606091505b50915091508161121657806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610e6a91906119f6565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821661126a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc461480156112a6575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15611347576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af115801561131d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113419190611fe3565b50505050565b61114a73ffffffffffffffffffffffffffffffffffffffff841683836117ae565b5f5b6040517f4fe02b4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301527effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851660248301525f917f000000000000000000000000000000000000000000000000000000000000000090911690634fe02b4490604401602060405180830381865afa15801561141f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114439190611d44565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81036114805761147584611e15565b93505f92505061136a565b60ff83161561148f5760ff83161c5b806001166001036114ad5760011c6114a683611e6f565b925061148f565b600884901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff84161795945050505050565b80516020808301516040515f93611544937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b5f7f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77082604051602001611544929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416611618576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611665576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61134173ffffffffffffffffffffffffffffffffffffffff85168484846117f7565b73ffffffffffffffffffffffffffffffffffffffff8416156113415773ffffffffffffffffffffffffffffffffffffffff83166116f0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611763573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117879190611d44565b10156113415761134173ffffffffffffffffffffffffffffffffffffffff8516848361184f565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166117ee576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661184257637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166117ee575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166117ee57633e3f8f735f526004601cfd5b5f5f83601f8401126118dd575f5ffd5b50813567ffffffffffffffff8111156118f4575f5ffd5b60208301915083602082850101111561190b575f5ffd5b9250929050565b5f60808284031215611922575f5ffd5b50919050565b5f5f5f5f5f60c0868803121561193c575f5ffd5b853567ffffffffffffffff811115611952575f5ffd5b61195e888289016118cd565b909650945061197290508760208801611912565b925060a086013567ffffffffffffffff81111561198d575f5ffd5b611999888289016118cd565b969995985093965092949392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f61121660208301846119aa565b73ffffffffffffffffffffffffffffffffffffffff81168114611a29575f5ffd5b50565b5f5f5f60608486031215611a3e575f5ffd5b8335611a4981611a08565b92506020840135611a5981611a08565b929592945050506040919091013590565b5f60208284031215611a7a575f5ffd5b813561121681611a08565b5f5f5f5f5f5f60a08789031215611a9a575f5ffd5b863567ffffffffffffffff811115611ab0575f5ffd5b611abc89828a016118cd565b9097509550506020870135611ad081611a08565b95989497509495604081013595506060810135946080909101359350915050565b5f5f5f5f5f5f60e08789031215611b06575f5ffd5b863567ffffffffffffffff811115611b1c575f5ffd5b611b2889828a016118cd565b9097509550506020870135611b3c81611a08565b9350611b4b8860408901611912565b925060c087013567ffffffffffffffff811115611b66575f5ffd5b611b7289828a016118cd565b979a9699509497509295939492505050565b5f5f60408385031215611b95575f5ffd5b8235611ba081611a08565b946020939093013593505050565b5f5f5f5f5f5f5f5f60e0898b031215611bc5575f5ffd5b8835611bd081611a08565b97506020890135965060408901359550606089013560ff81168114611bf3575f5ffd5b94506080890135935060a0890135925060c089013567ffffffffffffffff811115611c1c575f5ffd5b611c288b828c016118cd565b999c989b5096995094979396929594505050565b8035611c4781611a08565b73ffffffffffffffffffffffffffffffffffffffff1682526020818101359083015260408082013590830152606090810135910152565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b611ccf8187611c3c565b845173ffffffffffffffffffffffffffffffffffffffff166080820152602085015160a082015273ffffffffffffffffffffffffffffffffffffffff841660c082015261010060e08201525f611d2a61010083018486611c7e565b979650505050505050565b818382375f9101908152919050565b5f60208284031215611d54575f5ffd5b5051919050565b611d658189611c3c565b865173ffffffffffffffffffffffffffffffffffffffff166080820152602087015160a082015273ffffffffffffffffffffffffffffffffffffffff861660c08201528460e08201526101406101008201525f611dc66101408301866119aa565b828103610120840152611dda818587611c7e565b9a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103611e6657611e66611de8565b60010192915050565b5f60ff821660ff8103611e6657611e66611de8565b5f60033d1115611e9a5760045f5f3e505f5160e01c5b90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715611f06577f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040525050565b5f60443d1015611f1a5790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d602482011167ffffffffffffffff82111715611f6257505090565b808201805167ffffffffffffffff811115611f7e575050505090565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d8501016020828401011115611fb6575050505090565b611fc560208285010185611e9d565b509392505050565b5f82518060208501845e5f920191825250919050565b5f60208284031215611ff3575f5ffd5b81518015158114611216575f5ffdfe4c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a26469706673582212203b880e981907fbf059837342c40eadf2f45ad9fc0cf9b7fb1ba887bfc5bed60664736f6c634300081d00334c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_lifiDiamond";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_permit2";
            readonly type: "address";
            readonly internalType: "contract ISignatureTransfer";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_DIAMOND";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
            readonly name: "diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "callDiamondWithPermit2";
        readonly inputs: readonly [{
            readonly name: "_diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
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
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "callDiamondWithPermit2Witness";
        readonly inputs: readonly [{
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
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
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
        readonly name: "getPermit2MsgHash";
        readonly inputs: readonly [{
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
        readonly name: "nextNonce";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nextNonceAfter";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "start";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "withdrawToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "TokensWithdrawn";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
