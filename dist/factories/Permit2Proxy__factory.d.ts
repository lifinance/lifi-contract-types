import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";
declare type Permit2ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b506040516127a83803806127a883398101604081905261002e916100d5565b5f80546001600160a01b0319166001600160a01b0383811691909117909155838116608052821660a0908152604080519182019052606480825261274460208301396040518060a00160405280607b81526020016126c9607b913960405160200161009a929190610136565b60408051601f19818403018152919052805160209091012060c05250610152915050565b6001600160a01b03811681146100d2575f5ffd5b50565b5f5f5f606084860312156100e7575f5ffd5b83516100f2816100be565b6020850151909350610103816100be565b6040850151909250610114816100be565b809150509250925092565b5f81518060208401855e5f93019283525090919050565b5f61014a610144838661011f565b8461011f565b949350505050565b60805160a05160c0516124f96101d05f395f818161031501526107ca01525f81816102a3015281816103ea0152818161073901528181610a38015261135301525f818161017201528181610467015281816106d10152818161096701528181610b2401528181610eab015281816111ab01526111d401526124f95ff3fe60806040526004361061010c575f3560e01c80634561136e116100a15780638da5cb5b11610071578063d7a0847311610057578063d7a0847314610337578063e30c39781461034a578063f2fde38b14610376575f5ffd5b80638da5cb5b146102d9578063aeef37de14610304575f5ffd5b80634561136e146102605780635ebf8b7d146102735780636afdd850146102925780637200b829146102c5575f5ffd5b8063156e2152116100dc578063156e2152146101e65780631608b803146101fa57806323452b9c146102195780632c03ae6a1461022d575f5ffd5b80630193b9fc1461011757806301e3366714610140578063020a1f7d146101615780630cd55abf146101b9575f5ffd5b3661011357005b5f5ffd5b61012a610125366004611d66565b610395565b6040516101379190611e34565b60405180910390f35b34801561014b575f5ffd5b5061015f61015a366004611e6a565b6104d8565b005b34801561016c575f5ffd5b506101947f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610137565b3480156101c4575f5ffd5b506101d86101d3366004611ea8565b61065d565b604051908152602001610137565b3480156101f1575f5ffd5b5061012a61066f565b348015610205575f5ffd5b506101d8610214366004611ec3565b61068b565b348015610224575f5ffd5b5061015f61088e565b348015610238575f5ffd5b506101d87f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77081565b61012a61026e366004611f2f565b610957565b34801561027e575f5ffd5b506101d861028d366004611fc2565b610b98565b34801561029d575f5ffd5b506101947f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d0575f5ffd5b5061015f610c00565b3480156102e4575f5ffd5b505f546101949073ffffffffffffffffffffffffffffffffffffffff1681565b34801561030f575f5ffd5b506101d87f000000000000000000000000000000000000000000000000000000000000000081565b61012a610345366004611fec565b610ce4565b348015610355575f5ffd5b506001546101949073ffffffffffffffffffffffffffffffffffffffff1681565b348015610381575f5ffd5b5061015f610390366004611ea8565b610f0e565b6040805180820182523081526020808601359082015290517f30f28b7a00000000000000000000000000000000000000000000000000000000815260609173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916330f28b7a9161042691889190339089908990600401612103565b5f604051808303815f87803b15801561043d575f5ffd5b505af115801561044f573d5f5f3e3d5ffd5b5061049092506104659150506020860186611ea8565b7f0000000000000000000000000000000000000000000000000000000000000000602087013561106a565b6104ce86868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506111a492505050565b9695505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610528576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166105df575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610599576040519150601f19603f3d011682016040523d82523d5f602084013e61059e565b606091505b50509050806105d9576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610600565b61060073ffffffffffffffffffffffffffffffffffffffff8416838361129a565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f610669825f5f6112e3565b92915050565b6040518060a00160405280607b8152602001612449607b913981565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490525f90816106c18261145d565b90505f60405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018b8b60405161071b929190612168565b604051809103902081525090505f610732826114dc565b905061087f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107a0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107c49190612177565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9b9a5050505050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146108de576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661092d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60605f60405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16815260200189896040516109b1929190612168565b604051809103902081525090505f7f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77082604051602001610a1e929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8760405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018a5f01602001358152508a856040518060a00160405280607b8152602001612449607b91398b8b6040518863ffffffff1660e01b8152600401610ae3979695949392919061218e565b5f604051808303815f87803b158015610afa575f5ffd5b505af1158015610b0c573d5f5f3e3d5ffd5b50610b4d9250610b229150506020880188611ea8565b7f0000000000000000000000000000000000000000000000000000000000000000602089013561106a565b610b8b89898080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506111a492505050565b9998505050505050505050565b5f600882901c827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160ff821601610bde5781610bd381612248565b9250505f9050610bec565b80610be8816122a2565b9150505b610bf78583836112e3565b95945050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610c52576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810187905260ff8616608482015260a4810185905260c4810184905260609073ffffffffffffffffffffffffffffffffffffffff8a169063d505accf9060e4015f604051808303815f87803b158015610d76575f5ffd5b505af1925050508015610d87575060015b610e9957610d936122b7565b806308c379a003610e8f5750610da7612340565b80610db25750610e91565b6040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152899073ffffffffffffffffffffffffffffffffffffffff8c169063dd62ed3e90604401602060405180830381865afa158015610e22573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e469190612177565b1015610e8957806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e809190611e34565b60405180910390fd5b50610e99565b505b3d5f5f3e3d5ffd5b610ea58933308b61153c565b610ed0897f00000000000000000000000000000000000000000000000000000000000000008a61106a565b610b8b83838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506111a492505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610f5e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610fab576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610ffa576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff831661108a57505050565b73ffffffffffffffffffffffffffffffffffffffff82166110d7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561114a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061116e9190612177565b101561119f5761119f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611751565b505050565b60606111d07f0000000000000000000000000000000000000000000000000000000000000000346118c4565b5f5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16846040516112179190612400565b5f604051808303815f865af19150503d805f8114611250576040519150601f19603f3d011682016040523d82523d5f602084013e611255565b606091505b50915091508161129357806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610e809190611e34565b9392505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166112da576390b8ec185f526004601cfd5b5f603452505050565b5f5b6040517f4fe02b4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301527effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851660248301525f917f000000000000000000000000000000000000000000000000000000000000000090911690634fe02b4490604401602060405180830381865afa15801561139a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113be9190612177565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81036113fb576113f084612248565b93505f9250506112e5565b60ff83161561140a5760ff83161c5b806001166001036114285760011c611421836122a2565b925061140a565b600884901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff84161795945050505050565b80516020808301516040515f936114bf937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b5f7f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed770826040516020016114bf929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff8416611589576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115d6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611644573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116689190612177565b9050611676828686866118e1565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156116e4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117089190612177565b6117129190612416565b14611749576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526117dd848261193f565b6118be5760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526118b49085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119f5565b6118be84826119f5565b50505050565b5f385f3884865af16118dd5763b12d13eb5f526004601cfd5b5050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526118be9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611832565b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff16846040516119679190612400565b5f604051808303815f865af19150503d805f81146119a0576040519150601f19603f3d011682016040523d82523d5f602084013e6119a5565b606091505b50915091508180156119cf5750805115806119cf5750808060200190518101906119cf9190612429565b8015610bf7575073ffffffffffffffffffffffffffffffffffffffff85163b1515610bf7565b5f611a56826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b029092919063ffffffff16565b905080515f1480611a76575080806020019051810190611a769190612429565b61119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610e80565b6060611b1084845f85611b18565b949350505050565b606082471015611baa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610e80565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168587604051611bd29190612400565b5f6040518083038185875af1925050503d805f8114611c0c576040519150601f19603f3d011682016040523d82523d5f602084013e611c11565b606091505b5091509150611c2287838387611c2d565b979650505050505050565b60608315611cc25782515f03611cbb5773ffffffffffffffffffffffffffffffffffffffff85163b611cbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e80565b5081611b10565b611b108383815115611cd75781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e809190611e34565b5f5f83601f840112611d1b575f5ffd5b50813567ffffffffffffffff811115611d32575f5ffd5b602083019150836020828501011115611d49575f5ffd5b9250929050565b5f60808284031215611d60575f5ffd5b50919050565b5f5f5f5f5f60c08688031215611d7a575f5ffd5b853567ffffffffffffffff811115611d90575f5ffd5b611d9c88828901611d0b565b9096509450611db090508760208801611d50565b925060a086013567ffffffffffffffff811115611dcb575f5ffd5b611dd788828901611d0b565b969995985093965092949392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f6112936020830184611de8565b73ffffffffffffffffffffffffffffffffffffffff81168114611e67575f5ffd5b50565b5f5f5f60608486031215611e7c575f5ffd5b8335611e8781611e46565b92506020840135611e9781611e46565b929592945050506040919091013590565b5f60208284031215611eb8575f5ffd5b813561129381611e46565b5f5f5f5f5f5f60a08789031215611ed8575f5ffd5b863567ffffffffffffffff811115611eee575f5ffd5b611efa89828a01611d0b565b9097509550506020870135611f0e81611e46565b95989497509495604081013595506060810135946080909101359350915050565b5f5f5f5f5f5f60e08789031215611f44575f5ffd5b863567ffffffffffffffff811115611f5a575f5ffd5b611f6689828a01611d0b565b9097509550506020870135611f7a81611e46565b9350611f898860408901611d50565b925060c087013567ffffffffffffffff811115611fa4575f5ffd5b611fb089828a01611d0b565b979a9699509497509295939492505050565b5f5f60408385031215611fd3575f5ffd5b8235611fde81611e46565b946020939093013593505050565b5f5f5f5f5f5f5f5f60e0898b031215612003575f5ffd5b883561200e81611e46565b97506020890135965060408901359550606089013560ff81168114612031575f5ffd5b94506080890135935060a0890135925060c089013567ffffffffffffffff81111561205a575f5ffd5b6120668b828c01611d0b565b999c989b5096995094979396929594505050565b803561208581611e46565b73ffffffffffffffffffffffffffffffffffffffff1682526020818101359083015260408082013590830152606090810135910152565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b61210d818761207a565b845173ffffffffffffffffffffffffffffffffffffffff166080820152602085015160a082015273ffffffffffffffffffffffffffffffffffffffff841660c082015261010060e08201525f611c22610100830184866120bc565b818382375f9101908152919050565b5f60208284031215612187575f5ffd5b5051919050565b612198818961207a565b865173ffffffffffffffffffffffffffffffffffffffff166080820152602087015160a082015273ffffffffffffffffffffffffffffffffffffffff861660c08201528460e08201526101406101008201525f6121f9610140830186611de8565b82810361012084015261220d8185876120bc565b9a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81036122995761229961221b565b60010192915050565b5f60ff821660ff81036122995761229961221b565b5f60033d11156122cd5760045f5f3e505f5160e01c5b90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715612339577f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040525050565b5f60443d101561234d5790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d602482011167ffffffffffffffff8211171561239557505090565b808201805167ffffffffffffffff8111156123b1575050505090565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d85010160208284010111156123e9575050505090565b6123f8602082850101856122d0565b509392505050565b5f82518060208501845e5f920191825250919050565b818103818111156106695761066961221b565b5f60208284031215612439575f5ffd5b81518015158114611293575f5ffdfe4c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a264697066735822122099993a890e5045dc09d2d40f88864f16bd2bef1d1f80d8aa886ff02bfa500c8d64736f6c634300081d00334c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
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
