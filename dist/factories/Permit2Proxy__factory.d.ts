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
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200232f3803806200232f8339810160408190526200003491620000e3565b600080546001600160a01b0319166001600160a01b0383811691909117909155838116608052821660a09081526040805191820190526064808252620022cb60208301396040518060a00160405280607b815260200162002250607b9139604051602001620000a592919062000169565b60408051601f19818403018152919052805160209091012060c052506200018a915050565b6001600160a01b0381168114620000e057600080fd5b50565b600080600060608486031215620000f957600080fd5b83516200010681620000ca565b60208501519093506200011981620000ca565b60408501519092506200012c81620000ca565b809150509250925092565b6000815160005b818110156200015a57602081850181015186830152016200013e565b50600093019283525090919050565b6000620001826200017b838662000137565b8462000137565b949350505050565b60805160a05160c0516120426200020e6000396000818161032901526107f20152600081816102b3015281816104000152818161075f01528181610a63015261136201526000818161017b01528181610482015281816106f60152818161099101528181610b5501528181610fb3015281816111ad01526111d701526120426000f3fe6080604052600436106101125760003560e01c80634561136e116100a55780638da5cb5b11610074578063d7a0847311610059578063d7a084731461034b578063e30c39781461035e578063f2fde38b1461038b57600080fd5b80638da5cb5b146102ea578063aeef37de1461031757600080fd5b80634561136e1461026e5780635ebf8b7d146102815780636afdd850146102a15780637200b829146102d557600080fd5b8063156e2152116100e1578063156e2152146101f05780631608b8031461020557806323452b9c146102255780632c03ae6a1461023a57600080fd5b80630193b9fc1461011e57806301e3366714610147578063020a1f7d146101695780630cd55abf146101c257600080fd5b3661011957005b600080fd5b61013161012c3660046118ad565b6103ab565b60405161013e91906119a0565b60405180910390f35b34801561015357600080fd5b506101676101623660046119d8565b6104f4565b005b34801561017557600080fd5b5061019d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013e565b3480156101ce57600080fd5b506101e26101dd366004611a19565b61067e565b60405190815260200161013e565b3480156101fc57600080fd5b50610131610692565b34801561021157600080fd5b506101e2610220366004611a36565b6106ae565b34801561023157600080fd5b506101676108b6565b34801561024657600080fd5b506101e27f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77081565b61013161027c366004611aa7565b610980565b34801561028d57600080fd5b506101e261029c366004611b3e565b610bca565b3480156102ad57600080fd5b5061019d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102e157600080fd5b50610167610c34565b3480156102f657600080fd5b5060005461019d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032357600080fd5b506101e27f000000000000000000000000000000000000000000000000000000000000000081565b610131610359366004611b6a565b610d1a565b34801561036a57600080fd5b5060015461019d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561039757600080fd5b506101676103a6366004611a19565b611017565b6040805180820182523081526020808601359082015290517f30f28b7a00000000000000000000000000000000000000000000000000000000815260609173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916330f28b7a9161043c91889190339089908990600401611c8a565b600060405180830381600087803b15801561045657600080fd5b505af115801561046a573d6000803e3d6000fd5b506104ab92506104809150506020860186611a19565b7f00000000000000000000000000000000000000000000000000000000000000006020870135611175565b6104ea86868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111a692505050565b9695505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610545576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166106005760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146105ba576040519150601f19603f3d011682016040523d82523d6000602084013e6105bf565b606091505b50509050806105fa576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610621565b61062173ffffffffffffffffffffffffffffffffffffffff841683836112a1565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b600061068c826000806112f0565b92915050565b6040518060a00160405280607b8152602001611f92607b913981565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff8516815260208101849052600090816106e58261146f565b9050600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018b8b604051610740929190611cfb565b604051809103902081525090506000610758826114ef565b90506108a77f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec9190611d0b565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9b9a5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610907576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610956576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6060600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16815260200189896040516109db929190611cfb565b6040518091039020815250905060007f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed77082604051602001610a49929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8760405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018a600001602001358152508a856040518060a00160405280607b8152602001611f92607b91398b8b6040518863ffffffff1660e01b8152600401610b0f9796959493929190611d24565b600060405180830381600087803b158015610b2957600080fd5b505af1158015610b3d573d6000803e3d6000fd5b50610b7e9250610b539150506020880188611a19565b7f00000000000000000000000000000000000000000000000000000000000000006020890135611175565b610bbd89898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111a692505050565b9998505050505050505050565b6000600882901c827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160ff821601610c125781610c0681611de2565b92505060009050610c20565b80610c1c81611e20565b9150505b610c2b8583836112f0565b95945050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610c86576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810187905260ff8616608482015260a4810185905260c4810184905260609073ffffffffffffffffffffffffffffffffffffffff8a169063d505accf9060e401600060405180830381600087803b158015610daf57600080fd5b505af1925050508015610dc0575060015b610fa157610dcc611e3f565b806308c379a003610eca5750610de0611ecd565b80610deb5750610ecc565b6040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152899073ffffffffffffffffffffffffffffffffffffffff8c169063dd62ed3e90604401602060405180830381865afa158015610e5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e819190611d0b565b1015610ec457806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebb91906119a0565b60405180910390fd5b50610fa1565b505b3d808015610ef6576040519150601f19603f3d011682016040523d82523d6000602084013e610efb565b606091505b506040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152899073ffffffffffffffffffffffffffffffffffffffff8c169063dd62ed3e90604401602060405180830381865afa158015610f6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f929190611d0b565b1015610ec457610ec481611550565b610fad8933308b61155a565b610fd8897f00000000000000000000000000000000000000000000000000000000000000008a611175565b610bbd83838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111a692505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611068576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166110b5576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611104576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6111a18383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61161c565b505050565b60606111d27f000000000000000000000000000000000000000000000000000000000000000034611745565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168460405161121a9190611f75565b6000604051808303816000865af19150503d8060008114611257576040519150601f19603f3d011682016040523d82523d6000602084013e61125c565b606091505b50915091508161129a57806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610ebb91906119a0565b9392505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166112e6576390b8ec186000526004601cfd5b6000603452505050565b60005b6040517f4fe02b4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301527effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851660248301526000917f000000000000000000000000000000000000000000000000000000000000000090911690634fe02b4490604401602060405180830381865afa1580156113ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cf9190611d0b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810361140d5761140184611de2565b935060009250506112f3565b60ff83161561141c5760ff83161c5b8060011660010361143a5760011c61143383611e20565b925061141c565b600884901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff84161795945050505050565b80516020808301516040516000936114d2937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60007f94e6068a5a6dd834ff47c5974947ba1045655c61d1d1ee6dd509d2a6e2bed770826040516020016114d2929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84166115a7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115f4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61161673ffffffffffffffffffffffffffffffffffffffff8516848484611765565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116165773ffffffffffffffffffffffffffffffffffffffff8316611685576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156116fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171e9190611d0b565b10156116165761161673ffffffffffffffffffffffffffffffffffffffff851684836117c2565b60003860003884865af16117615763b12d13eb6000526004601cfd5b5050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166117b457637939f4246000526004601cfd5b600060605260405250505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166112e65760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166112e657633e3f8f736000526004601cfd5b60008083601f84011261185e57600080fd5b50813567ffffffffffffffff81111561187657600080fd5b60208301915083602082850101111561188e57600080fd5b9250929050565b6000608082840312156118a757600080fd5b50919050565b600080600080600060c086880312156118c557600080fd5b853567ffffffffffffffff808211156118dd57600080fd5b6118e989838a0161184c565b90975095508591506118fe8960208a01611895565b945060a088013591508082111561191457600080fd5b506119218882890161184c565b969995985093965092949392505050565b60005b8381101561194d578181015183820152602001611935565b50506000910152565b6000815180845261196e816020860160208601611932565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061129a6020830184611956565b73ffffffffffffffffffffffffffffffffffffffff811681146119d557600080fd5b50565b6000806000606084860312156119ed57600080fd5b83356119f8816119b3565b92506020840135611a08816119b3565b929592945050506040919091013590565b600060208284031215611a2b57600080fd5b813561129a816119b3565b60008060008060008060a08789031215611a4f57600080fd5b863567ffffffffffffffff811115611a6657600080fd5b611a7289828a0161184c565b9097509550506020870135611a86816119b3565b95989497509495604081013595506060810135946080909101359350915050565b60008060008060008060e08789031215611ac057600080fd5b863567ffffffffffffffff80821115611ad857600080fd5b611ae48a838b0161184c565b909850965060208901359150611af9826119b3565b819550611b098a60408b01611895565b945060c0890135915080821115611b1f57600080fd5b50611b2c89828a0161184c565b979a9699509497509295939492505050565b60008060408385031215611b5157600080fd5b8235611b5c816119b3565b946020939093013593505050565b60008060008060008060008060e0898b031215611b8657600080fd5b8835611b91816119b3565b97506020890135965060408901359550606089013560ff81168114611bb557600080fd5b94506080890135935060a0890135925060c089013567ffffffffffffffff811115611bdf57600080fd5b611beb8b828c0161184c565b999c989b5096995094979396929594505050565b8035611c0a816119b3565b73ffffffffffffffffffffffffffffffffffffffff1682526020818101359083015260408082013590830152606090810135910152565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000610100611c998389611bff565b865173ffffffffffffffffffffffffffffffffffffffff166080840152602087015160a084015273ffffffffffffffffffffffffffffffffffffffff861660c08401528060e0840152611cef8184018587611c41565b98975050505050505050565b8183823760009101908152919050565b600060208284031215611d1d57600080fd5b5051919050565b6000610140611d33838b611bff565b885173ffffffffffffffffffffffffffffffffffffffff166080840152602089015160a084015273ffffffffffffffffffffffffffffffffffffffff881660c08401528660e084015280610100840152611d8f81840187611956565b9050828103610120840152611da5818587611c41565b9a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808316818103611e1657611e16611db3565b6001019392505050565b600060ff821660ff8103611e3657611e36611db3565b60010192915050565b600060033d1115611e585760046000803e5060005160e01c5b90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715611ec6577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040525050565b600060443d1015611edb5790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff8160248401118184111715611f2957505050505090565b8285019150815181811115611f415750505050505090565b843d8701016020828501011115611f5b5750505050505090565b611f6a60208286010187611e5b565b509095945050505050565b60008251611f87818460208701611932565b919091019291505056fe4c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a264697066735822122021471846e8a8572cac3edb816b6da2680f3334c44f6d3fd3ed876af9bc790bc264736f6c634300081100334c69466943616c6c207769746e657373294c69466943616c6c2861646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
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
