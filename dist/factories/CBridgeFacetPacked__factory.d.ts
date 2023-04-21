import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacetPacked, CBridgeFacetPackedInterface } from "../CBridgeFacetPacked";
declare type CBridgeFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CBridgeFacetPacked__factory extends ContractFactory {
    constructor(...args: CBridgeFacetPackedConstructorParams);
    deploy(_cBridge: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CBridgeFacetPacked>;
    getDeployTransaction(_cBridge: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeFacetPacked;
    connect(signer: Signer): CBridgeFacetPacked__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002b4438038062002b44833981016040819052620000349162000073565b600080546001600160a01b0319166001600160a01b0392831617905516608052620000b2565b6001600160a01b03811681146200007057600080fd5b50565b600080604083850312156200008757600080fd5b825162000094816200005a565b6020840151909250620000a7816200005a565b809150509250929050565b608051612a53620000f1600039600081816102fe01528181610519015281816106450152818161094f015281816112c401526115d10152612a536000f3fe6080604052600436106100e75760003560e01c8063a2ed56071161008a578063e30c397811610059578063e30c397814610265578063f2fde38b14610292578063f6848697146102b2578063fc852c5a146102c757600080fd5b8063a2ed5607146101ca578063aef365ad146101f7578063be8a84ac14610217578063dee4be1b1461024557600080fd5b806323452b9c116100c657806323452b9c146101295780634c4786421461013e5780637200b8291461015e5780638da5cb5b1461017357600080fd5b806278afb6146100ec5780630193979f146100f65780630d19e51914610109575b600080fd5b6100f46102e7565b005b6100f46101043660046123a5565b6104a8565b34801561011557600080fd5b506100f4610124366004612447565b6105db565b34801561013557600080fd5b506100f46107fd565b34801561014a57600080fd5b506100f46101593660046124cc565b6108c7565b34801561016a57600080fd5b506100f46109ab565b34801561017f57600080fd5b506000546101a09073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101d657600080fd5b506101ea6101e53660046123a5565b610a91565b6040516101c191906125af565b34801561020357600080fd5b506101ea6102123660046125c2565b610cac565b34801561022357600080fd5b5061023761023236600461263e565b610f99565b6040516101c1929190612680565b34801561025157600080fd5b506100f46102603660046125c2565b6111ae565b34801561027157600080fd5b506001546101a09073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029e57600080fd5b506100f46102ad3660046127c7565b61137f565b3480156102be57600080fd5b506100f46114dd565b3480156102d357600080fd5b506102376102e236600461263e565b611782565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633f2e5fc3346103336020600c3660006127e4565b61033c9161280e565b60601c3461034f602460203660006127e4565b61035891612856565b60e01c61036a602860243660006127e4565b61037391612856565b60e01c610385602c60283660006127e4565b61038e91612856565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff969096166004820152602481019490945267ffffffffffffffff92831660448501529116606483015290911c608482015260a4016000604051808303818588803b15801561041c57600080fd5b505af1158015610430573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32193506104699250600c9150600490503660006127e4565b6104729161289c565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b6040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152346024830181905267ffffffffffffffff80871660448501528516606484015263ffffffff841660848401527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc3919060a4016000604051808303818588803b15801561055f57600080fd5b505af1158015610573573d6000803e3d6000fd5b50506040517fffffffffffffffff000000000000000000000000000000000000000000000000891681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de321935060200191506105cc9050565b60405180910390a15050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461062c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16146106b1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516106da9291906128e2565b6000604051808303816000865af19150503d8060008114610717576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b606091505b50508091505080610759576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff84161561077d578361077f565b335b905061078c8582856119ba565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f856040516107eb91815260200190565b60405180910390a35050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461084e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661089d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610918576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156109a657610994838383818110610938576109386128f2565b905060200201602081019061094d91906127c7565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119eb565b8061099e81612921565b91505061091b565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146109fd576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff67ffffffffffffffff85161115610b36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b63ffffffff67ffffffffffffffff84161115610bd4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b2d565b50604080517e78afb60000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff00000000000000000000000000000000000000000000000096909616602487015260609490941b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602c8087019190915260e093841b7fffffffff000000000000000000000000000000000000000000000000000000009081168787015292841b83166044870152921b16604884015281518084039091018152604c909201905290565b606063ffffffff67ffffffffffffffff87161115610d4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610b2d565b6fffffffffffffffffffffffffffffffff841115610dec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e74313238000000000000000000000000000000000000006064820152608401610b2d565b63ffffffff67ffffffffffffffff84161115610e8a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b2d565b50604080517ff68486970000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000989098166024890152606096871b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8a015260e096871b7fffffffff000000000000000000000000000000000000000000000000000000009081168a8401529590971b909616604488015260809290921b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000166058870152831b8216606886015290911b16606c830152805180830360500181526070909201905290565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290602c83101561108b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610b2d565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906110fa600c600487896127e4565b6111039161289c565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111356020600c87896127e4565b61113e9161280e565b60601c60a08301526111546024602087896127e4565b61115d91612856565b60e090811c908301526111746028602487896127e4565b61117d91612856565b60e01c6020820152611193602c602887896127e4565b61119c91612856565b60e01c815290925090505b9250929050565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff8516906323b872dd906064016020604051808303816000875af1158015611227573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124b9190612980565b506040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301526044820185905267ffffffffffffffff80881660648401528416608483015263ffffffff831660a48301527f0000000000000000000000000000000000000000000000000000000000000000169063a5977fbb9060c401600060405180830381600087803b15801561130857600080fd5b505af115801561131c573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008a1681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de3219250602001905060405180910390a150505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113d0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661141d576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361146c576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006114ed6038602436846127e4565b6114f69161280e565b60601c9050600061150b6048603836846127e4565b611514916129a2565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260809190911c60448201819052915073ffffffffffffffffffffffffffffffffffffffff8316906323b872dd906064016020604051808303816000875af1158015611595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b99190612980565b5073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a5977fbb6116056020600c3660006127e4565b61160e9161280e565b60601c8484611622602460203660006127e4565b61162b91612856565b60e01c61163d604c60483660006127e4565b61164691612856565b60e01c6116586050604c3660006127e4565b61166191612856565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff9788166004830152959096166024870152604486019390935267ffffffffffffffff9182166064860152166084840152901c60a482015260c401600060405180830381600087803b1580156116f657600080fd5b505af115801561170a573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32192506117419150600c905060043660006127e4565b61174a9161289c565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906050831015611874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e6774680000000000000000000000000000000000000000000000000000006064820152608401610b2d565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906118e3600c600487896127e4565b6118ec9161289c565b7fffffffffffffffff00000000000000000000000000000000000000000000000016825261191e6020600c87896127e4565b6119279161280e565b60601c60a083015261193d6024602087896127e4565b61194691612856565b60e090811c9083015261195d6038602487896127e4565b6119669161280e565b60601c608083015261197c6048603887896127e4565b611985916129a2565b60801c60c083015261199b604c604887896127e4565b6119a491612856565b60e01c60208201526111936050604c87896127e4565b73ffffffffffffffffffffffffffffffffffffffff8316156119e1576109a6838383611b2e565b6109a68282611cb0565b73ffffffffffffffffffffffffffffffffffffffff8316611a0b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a58576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611acd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611af191906129e8565b10156109a657611b0383836000611dda565b6109a683837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611dda565b73ffffffffffffffffffffffffffffffffffffffff8316611b7b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611bc8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611c35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5991906129e8565b905080821115611c9f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b2d565b611caa848484611fda565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611cfd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611d40576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610b2d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611d9a576040519150601f19603f3d011682016040523d82523d6000602084013e611d9f565b606091505b50509050806109a6576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801580611e7a57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e7891906129e8565b155b611f06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610b2d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109a69084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612030565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109a69084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611f58565b6000612092826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661213c9092919063ffffffff16565b8051909150156109a657808060200190518101906120b09190612980565b6109a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b2d565b606061214b8484600085612155565b90505b9392505050565b6060824710156121e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b2d565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516122109190612a01565b60006040518083038185875af1925050503d806000811461224d576040519150601f19603f3d011682016040523d82523d6000602084013e612252565b606091505b509150915061226387838387612270565b925050505b949350505050565b606083156123065782516000036122ff5773ffffffffffffffffffffffffffffffffffffffff85163b6122ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b2d565b5081612268565b612268838381511561231b5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2d91906125af565b73ffffffffffffffffffffffffffffffffffffffff8116811461237157600080fd5b50565b803567ffffffffffffffff8116811461238c57600080fd5b919050565b803563ffffffff8116811461238c57600080fd5b600080600080600060a086880312156123bd57600080fd5b8535945060208601356123cf8161234f565b93506123dd60408701612374565b92506123eb60608701612374565b91506123f960808701612391565b90509295509295909350565b60008083601f84011261241757600080fd5b50813567ffffffffffffffff81111561242f57600080fd5b6020830191508360208285010111156111a757600080fd5b60008060008060008060a0878903121561246057600080fd5b863561246b8161234f565b9550602087013567ffffffffffffffff81111561248757600080fd5b61249389828a01612405565b90965094505060408701356124a78161234f565b925060608701356124b78161234f565b80925050608087013590509295509295509295565b600080602083850312156124df57600080fd5b823567ffffffffffffffff808211156124f757600080fd5b818501915085601f83011261250b57600080fd5b81358181111561251a57600080fd5b8660208260051b850101111561252f57600080fd5b60209290920196919550909350505050565b60005b8381101561255c578181015183820152602001612544565b50506000910152565b6000815180845261257d816020860160208601612541565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061214e6020830184612565565b600080600080600080600060e0888a0312156125dd57600080fd5b8735965060208801356125ef8161234f565b95506125fd60408901612374565b9450606088013561260d8161234f565b93506080880135925061262260a08901612374565b915061263060c08901612391565b905092959891949750929550565b6000806020838503121561265157600080fd5b823567ffffffffffffffff81111561266857600080fd5b61267485828601612405565b90969095509350505050565b6060815282516060820152600060208401516101408060808501526126a96101a0850183612565565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08584030160a08601526126e48382612565565b925050606086015161270e60c086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060a086015161010061275a8187018373ffffffffffffffffffffffffffffffffffffffff169052565b60c08801519150610120828188015260e08901518488015281890151935061278761016088018515159052565b880151801515610180880152925061279d915050565b50905061214e6020830184805163ffffffff16825260209081015167ffffffffffffffff16910152565b6000602082840312156127d957600080fd5b813561214e8161234f565b600080858511156127f457600080fd5b8386111561280157600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000813581811691601485101561284e5780818660140360031b1b83161692505b505092915050565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561284e5760049490940360031b84901b1690921692915050565b7fffffffffffffffff000000000000000000000000000000000000000000000000813581811691600885101561284e5760089490940360031b84901b1690921692915050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612979577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561299257600080fd5b8151801515811461214e57600080fd5b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000813581811691601085101561284e5760109490940360031b84901b1690921692915050565b6000602082840312156129fa57600080fd5b5051919050565b60008251612a13818460208701612541565b919091019291505056fea2646970667358221220409933c2d8c1ee85e5b9aeb0285938ebc86b923761629bac005c886b912311da64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ICBridge";
            readonly name: "_cBridge";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExternalCallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewOwnerMustNotBeSelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoNullOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingOwnershipTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPendingOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_assetAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "CBridgeRefund";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes8";
            readonly name: "_transactionId";
            readonly type: "bytes8";
        }];
        readonly name: "LiFiCBridgeTransfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "encode_startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "encode_startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "tokensToApprove";
            readonly type: "address[]";
        }];
        readonly name: "setApprovalForBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "startBridgeTokensViaCBridgeERC20Min";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "startBridgeTokensViaCBridgeNativeMin";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_callTo";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_assetAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "triggerRefund";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): CBridgeFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacetPacked;
}
export {};
