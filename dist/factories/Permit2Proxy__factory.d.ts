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
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b5060405161276238038061276283398101604081905261002e916100d5565b5f80546001600160a01b0319166001600160a01b0383811691909117909155838116608052821660a090815260408051918201905260648082526126fe60208301396040518060a00160405280607b8152602001612683607b913960405160200161009a929190610136565b60408051601f19818403018152919052805160209091012060c05250610152915050565b6001600160a01b03811681146100d2575f5ffd5b50565b5f5f5f606084860312156100e7575f5ffd5b83516100f2816100be565b6020850151909350610103816100be565b6040850151909250610114816100be565b809150509250925092565b5f81518060208401855e5f93019283525090919050565b5f61014a610144838661011f565b8461011f565b949350505050565b60805160a05160c0516124b36101d05f395f8181610387015261083c01525f81816102d70152818161045c015281816107ab01528181610aaa015261127c01525f81816101a6015281816104d901528181610743015281816109d901528181610b9601528181610e0201528181610eee01526110f201526124b35ff3fe608060405260043610610140575f3560e01c80635ebf8b7d116100bb5780638da5cb5b11610071578063d7a0847311610057578063d7a08473146103a9578063e30c3978146103bc578063f2fde38b146103e8575f5ffd5b80638da5cb5b1461034b578063aeef37de14610376575f5ffd5b80637200b829116100a15780637200b829146102f95780637ecebe001461030d57806386cabde314610338575f5ffd5b80635ebf8b7d146102a75780636afdd850146102c6575f5ffd5b8063156e21521161011057806323452b9c116100f657806323452b9c1461024d5780632c03ae6a146102615780634561136e14610294575f5ffd5b8063156e21521461021a5780631608b8031461022e575f5ffd5b80630193b9fc1461014b57806301e3366714610174578063020a1f7d146101955780630cd55abf146101ed575f5ffd5b3661014757005b5f5ffd5b61015e610159366004611c56565b610407565b60405161016b9190611d24565b60405180910390f35b34801561017f575f5ffd5b5061019361018e366004611d5a565b61054a565b005b3480156101a0575f5ffd5b506101c87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161016b565b3480156101f8575f5ffd5b5061020c610207366004611d98565b6106cf565b60405190815260200161016b565b348015610225575f5ffd5b5061015e6106e1565b348015610239575f5ffd5b5061020c610248366004611db3565b6106fd565b348015610258575f5ffd5b50610193610900565b34801561026c575f5ffd5b5061020c7f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77081565b61015e6102a2366004611e1f565b6109c9565b3480156102b2575f5ffd5b5061020c6102c1366004611eb2565b610c0a565b3480156102d1575f5ffd5b506101c87f000000000000000000000000000000000000000000000000000000000000000081565b348015610304575f5ffd5b50610193610c72565b348015610318575f5ffd5b5061020c610327366004611d98565b60026020525f908152604090205481565b61015e610346366004611edc565b610d56565b348015610356575f5ffd5b505f546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b348015610381575f5ffd5b5061020c7f000000000000000000000000000000000000000000000000000000000000000081565b61015e6103b7366004611f70565b610e71565b3480156103c7575f5ffd5b506001546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b3480156103f3575f5ffd5b50610193610402366004611d98565b610f5f565b6040805180820182523081526020808601359082015290517f30f28b7a00000000000000000000000000000000000000000000000000000000815260609173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916330f28b7a9161049891889190339089908990600401612087565b5f604051808303815f87803b1580156104af575f5ffd5b505af11580156104c1573d5f5f3e3d5ffd5b5061050292506104d79150506020860186611d98565b7f000000000000000000000000000000000000000000000000000000000000000060208701356110bb565b61054086868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506110ec92505050565b9695505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461059a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610651575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461060b576040519150601f19603f3d011682016040523d82523d5f602084013e610610565b606091505b505090508061064b576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610672565b61067273ffffffffffffffffffffffffffffffffffffffff841683836111c3565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f6106db825f5f61120c565b92915050565b6040518060a00160405280607b8152602001612403607b913981565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490525f908161073382611386565b90505f60405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018b8b60405161078d9291906120f7565b604051809103902081525090505f6107a482611405565b90506108f17f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa158015610812573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108369190612106565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9b9a5050505050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610950576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661099f576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60605f60405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018989604051610a239291906120f7565b604051809103902081525090505f7f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77082604051602001610a90929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8760405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018a5f01602001358152508a856040518060a00160405280607b8152602001612403607b91398b8b6040518863ffffffff1660e01b8152600401610b55979695949392919061211d565b5f604051808303815f87803b158015610b6c575f5ffd5b505af1158015610b7e573d5f5f3e3d5ffd5b50610bbf9250610b949150506020880188611d98565b7f000000000000000000000000000000000000000000000000000000000000000060208901356110bb565b610bfd89898080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506110ec92505050565b9998505050505050505050565b5f600882901c827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160ff821601610c505781610c45816121c9565b9250505f9050610c5e565b80610c5a81612223565b9150505b610c6985838361120c565b95945050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610cc4576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606085421115610d92576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6017333b11610de157610ddc88888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061146592505050565b610df0565b610df088888888888888611730565b610dfc8833308a611932565b610e27887f0000000000000000000000000000000000000000000000000000000000000000896110bb565b610e6583838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506110ec92505050565b98975050505050505050565b60605f858588604051602001610ebf93929190928352602083019190915260f81b7fff0000000000000000000000000000000000000000000000000000000000000016604082015260410190565b6040516020818303038152906040529050610edc8a8a8a84611465565b610ee88a33308c611932565b610f138a7f00000000000000000000000000000000000000000000000000000000000000008b6110bb565b610f5184848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506110ec92505050565b9a9950505050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610faf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ffc576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361104b576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b6110e78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119f4565b505050565b60605f5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1634856040516111369190612238565b5f6040518083038185875af1925050503d805f8114611170576040519150601f19603f3d011682016040523d82523d5f602084013e611175565b606091505b5091509150816111bc57806040517f0e971f120000000000000000000000000000000000000000000000000000000081526004016111b39190611d24565b60405180910390fd5b9392505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611203576390b8ec185f526004601cfd5b5f603452505050565b5f5b6040517f4fe02b4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301527effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851660248301525f917f000000000000000000000000000000000000000000000000000000000000000090911690634fe02b4490604401602060405180830381865afa1580156112c3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112e79190612106565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810361132457611319846121c9565b93505f92505061120e565b60ff8316156113335760ff83161c5b806001166001036113515760011c61134a83612223565b9250611333565b600884901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff84161795945050505050565b80516020808301516040515f936113e8937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b5f7f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed770826040516020016113e8929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b80516041146114a0576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020810151604080830151606084015191517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052606481018690525f9290921a6084830181905260a4830184905260c48301829052909173ffffffffffffffffffffffffffffffffffffffff88169063d505accf9060e4015f604051808303815f87803b158015611543575f5ffd5b505af1925050508015611554575060015b6117275761156061224e565b806308c379a00361165357506115746122d7565b8061157f5750611655565b6040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152879073ffffffffffffffffffffffffffffffffffffffff8a169063dd62ed3e90604401602060405180830381865afa1580156115ef573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116139190612106565b101561164d57806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b39190611d24565b50611727565b505b3d80801561167e576040519150601f19603f3d011682016040523d82523d5f602084013e611683565b606091505b506040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152879073ffffffffffffffffffffffffffffffffffffffff8a169063dd62ed3e90604401602060405180830381865afa1580156116f4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117189190612106565b101561164d5761164d81611b1b565b50505050505050565b335f908152600260205260408082205490519091907fc68257aec134982c10ffd25440fd443a5493626c5edd333a6853645da106b0b5908a908a908a9061177a90899089906120f7565b60408051918290038220602083019690965273ffffffffffffffffffffffffffffffffffffffff909416938101939093526060830191909152608082015260a081019190915260c081018390524660e08201523061010082015261012001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020909101207f1626ba7e00000000000000000000000000000000000000000000000000000000825291505f903390631626ba7e906118509085908b908b90600401612397565b602060405180830381865afa15801561186b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061188f91906123b0565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f1626ba7e000000000000000000000000000000000000000000000000000000001461190c576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119178360016123ef565b335f9081526002602052604090205550505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841661197f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166119cc576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119ee73ffffffffffffffffffffffffffffffffffffffff8516848484611b25565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119ee5773ffffffffffffffffffffffffffffffffffffffff8316611a5d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611ad0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611af49190612106565b10156119ee576119ee73ffffffffffffffffffffffffffffffffffffffff85168483611b7d565b8051602082018181fd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716611b7057637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611203575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661120357633e3f8f735f526004601cfd5b5f5f83601f840112611c0b575f5ffd5b50813567ffffffffffffffff811115611c22575f5ffd5b602083019150836020828501011115611c39575f5ffd5b9250929050565b5f60808284031215611c50575f5ffd5b50919050565b5f5f5f5f5f60c08688031215611c6a575f5ffd5b853567ffffffffffffffff811115611c80575f5ffd5b611c8c88828901611bfb565b9096509450611ca090508760208801611c40565b925060a086013567ffffffffffffffff811115611cbb575f5ffd5b611cc788828901611bfb565b969995985093965092949392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f6111bc6020830184611cd8565b73ffffffffffffffffffffffffffffffffffffffff81168114611d57575f5ffd5b50565b5f5f5f60608486031215611d6c575f5ffd5b8335611d7781611d36565b92506020840135611d8781611d36565b929592945050506040919091013590565b5f60208284031215611da8575f5ffd5b81356111bc81611d36565b5f5f5f5f5f5f60a08789031215611dc8575f5ffd5b863567ffffffffffffffff811115611dde575f5ffd5b611dea89828a01611bfb565b9097509550506020870135611dfe81611d36565b95989497509495604081013595506060810135946080909101359350915050565b5f5f5f5f5f5f60e08789031215611e34575f5ffd5b863567ffffffffffffffff811115611e4a575f5ffd5b611e5689828a01611bfb565b9097509550506020870135611e6a81611d36565b9350611e798860408901611c40565b925060c087013567ffffffffffffffff811115611e94575f5ffd5b611ea089828a01611bfb565b979a9699509497509295939492505050565b5f5f60408385031215611ec3575f5ffd5b8235611ece81611d36565b946020939093013593505050565b5f5f5f5f5f5f5f60a0888a031215611ef2575f5ffd5b8735611efd81611d36565b96506020880135955060408801359450606088013567ffffffffffffffff811115611f26575f5ffd5b611f328a828b01611bfb565b909550935050608088013567ffffffffffffffff811115611f51575f5ffd5b611f5d8a828b01611bfb565b989b979a50959850939692959293505050565b5f5f5f5f5f5f5f5f60e0898b031215611f87575f5ffd5b8835611f9281611d36565b97506020890135965060408901359550606089013560ff81168114611fb5575f5ffd5b94506080890135935060a0890135925060c089013567ffffffffffffffff811115611fde575f5ffd5b611fea8b828c01611bfb565b999c989b5096995094979396929594505050565b803561200981611d36565b73ffffffffffffffffffffffffffffffffffffffff1682526020818101359083015260408082013590830152606090810135910152565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6120918187611ffe565b845173ffffffffffffffffffffffffffffffffffffffff166080820152602085015160a082015273ffffffffffffffffffffffffffffffffffffffff841660c082015261010060e08201525f6120ec61010083018486612040565b979650505050505050565b818382375f9101908152919050565b5f60208284031215612116575f5ffd5b5051919050565b6121278189611ffe565b865173ffffffffffffffffffffffffffffffffffffffff166080820152602087015160a082015273ffffffffffffffffffffffffffffffffffffffff861660c08201528460e08201526101406101008201525f612188610140830186611cd8565b828103610120840152610f51818587612040565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810361221a5761221a61219c565b60010192915050565b5f60ff821660ff810361221a5761221a61219c565b5f82518060208501845e5f920191825250919050565b5f60033d11156122645760045f5f3e505f5160e01c5b90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156122d0577f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040525050565b5f60443d10156122e45790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d602482011167ffffffffffffffff8211171561232c57505090565b808201805167ffffffffffffffff811115612348575050505090565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d8501016020828401011115612380575050505090565b61238f60208285010185612267565b509392505050565b838152604060208201525f610c69604083018486612040565b5f602082840312156123c0575f5ffd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146111bc575f5ffd5b808201808211156106db576106db61219c56fe4c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a264697066735822122049c39e4f6c75f45069760557d26c43889b30dd53e5e6c43df34bcddc39f87fc764736f6c634300081d00334c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
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
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
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
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly name: "InvalidSignature";
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
