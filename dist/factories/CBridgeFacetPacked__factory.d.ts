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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002b4038038062002b40833981016040819052620000349162000073565b600080546001600160a01b0319166001600160a01b0392831617905516608052620000b2565b6001600160a01b03811681146200007057600080fd5b50565b600080604083850312156200008757600080fd5b825162000094816200005a565b6020840151909250620000a7816200005a565b809150509250929050565b608051612a4f620000f16000396000818161030901528181610524015281816106500152818161095a0152818161125301526114e10152612a4f6000f3fe6080604052600436106100eb5760003560e01c8063a2ed56071161008a578063e30c397811610059578063e30c397814610270578063f2fde38b1461029d578063f6848697146102bd578063fc852c5a146102d257600080fd5b8063a2ed5607146101d5578063aef365ad14610202578063be8a84ac14610222578063dee4be1b1461025057600080fd5b806323452b9c116100c657806323452b9c146101345780634c478642146101495780637200b829146101695780638da5cb5b1461017e57600080fd5b806278afb6146100f75780630193979f146101015780630d19e5191461011457600080fd5b366100f257005b600080fd5b6100ff6102f2565b005b6100ff61010f3660046123a1565b6104b3565b34801561012057600080fd5b506100ff61012f366004612443565b6105e6565b34801561014057600080fd5b506100ff610808565b34801561015557600080fd5b506100ff6101643660046124c8565b6108d2565b34801561017557600080fd5b506100ff6109b6565b34801561018a57600080fd5b506000546101ab9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101e157600080fd5b506101f56101f03660046123a1565b610a9c565b6040516101cc91906125ab565b34801561020e57600080fd5b506101f561021d3660046125be565b610cb7565b34801561022e57600080fd5b5061024261023d36600461263a565b610fa4565b6040516101cc92919061267c565b34801561025c57600080fd5b506100ff61026b3660046125be565b6111b9565b34801561027c57600080fd5b506001546101ab9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102a957600080fd5b506100ff6102b83660046127c3565b61130e565b3480156102c957600080fd5b506100ff61146c565b3480156102de57600080fd5b506102426102ed36600461263a565b611692565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633f2e5fc33461033e6020600c3660006127e0565b6103479161280a565b60601c3461035a602460203660006127e0565b61036391612852565b60e01c610375602860243660006127e0565b61037e91612852565b60e01c610390602c60283660006127e0565b61039991612852565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff969096166004820152602481019490945267ffffffffffffffff92831660448501529116606483015290911c608482015260a4016000604051808303818588803b15801561042757600080fd5b505af115801561043b573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32193506104749250600c9150600490503660006127e0565b61047d91612898565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b6040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152346024830181905267ffffffffffffffff80871660448501528516606484015263ffffffff841660848401527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc3919060a4016000604051808303818588803b15801561056a57600080fd5b505af115801561057e573d6000803e3d6000fd5b50506040517fffffffffffffffff000000000000000000000000000000000000000000000000891681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de321935060200191506105d79050565b60405180910390a15050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610637576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16146106bc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516106e59291906128de565b6000604051808303816000865af19150503d8060008114610722576040519150601f19603f3d011682016040523d82523d6000602084013e610727565b606091505b50508091505080610764576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610788578361078a565b335b90506107978582856118ca565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f856040516107f691815260200190565b60405180910390a35050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610859576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166108a8576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610923576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156109b15761099f838383818110610943576109436128ee565b905060200201602081019061095891906127c3565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118fb565b806109a98161291d565b915050610926565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610a08576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff67ffffffffffffffff85161115610b41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b63ffffffff67ffffffffffffffff84161115610bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b38565b50604080517e78afb60000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff00000000000000000000000000000000000000000000000096909616602487015260609490941b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602c8087019190915260e093841b7fffffffff000000000000000000000000000000000000000000000000000000009081168787015292841b83166044870152921b16604884015281518084039091018152604c909201905290565b606063ffffffff67ffffffffffffffff87161115610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610b38565b6fffffffffffffffffffffffffffffffff841115610df7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e74313238000000000000000000000000000000000000006064820152608401610b38565b63ffffffff67ffffffffffffffff84161115610e95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b38565b50604080517ff68486970000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000989098166024890152606096871b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8a015260e096871b7fffffffff000000000000000000000000000000000000000000000000000000009081168a8401529590971b909616604488015260809290921b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000166058870152831b8216606886015290911b16606c830152805180830360500181526070909201905290565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290602c831015611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610b38565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290611105600c600487896127e0565b61110e91612898565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111406020600c87896127e0565b6111499161280a565b60601c60a083015261115f6024602087896127e0565b61116891612852565b60e090811c9083015261117f6028602487896127e0565b61118891612852565b60e01c602082015261119e602c602887896127e0565b6111a791612852565b60e01c815290925090505b9250929050565b6111db73ffffffffffffffffffffffffffffffffffffffff8516333086611a32565b6040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301526044820185905267ffffffffffffffff80881660648401528416608483015263ffffffff831660a48301527f0000000000000000000000000000000000000000000000000000000000000000169063a5977fbb9060c401600060405180830381600087803b15801561129757600080fd5b505af11580156112ab573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008a1681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de3219250602001905060405180910390a150505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461135f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166113ac576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036113fb576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600061147c6038602436846127e0565b6114859161280a565b60601c9050600061149a6048603836846127e0565b6114a39161297c565b60801c90506114ca73ffffffffffffffffffffffffffffffffffffffff8316333084611a32565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a5977fbb6115156020600c3660006127e0565b61151e9161280a565b60601c8484611532602460203660006127e0565b61153b91612852565b60e01c61154d604c60483660006127e0565b61155691612852565b60e01c6115686050604c3660006127e0565b61157191612852565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff9788166004830152959096166024870152604486019390935267ffffffffffffffff9182166064860152166084840152901c60a482015260c401600060405180830381600087803b15801561160657600080fd5b505af115801561161a573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32192506116519150600c905060043660006127e0565b61165a91612898565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906050831015611784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e6774680000000000000000000000000000000000000000000000000000006064820152608401610b38565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906117f3600c600487896127e0565b6117fc91612898565b7fffffffffffffffff00000000000000000000000000000000000000000000000016825261182e6020600c87896127e0565b6118379161280a565b60601c60a083015261184d6024602087896127e0565b61185691612852565b60e090811c9083015261186d6038602487896127e0565b6118769161280a565b60601c608083015261188c6048603887896127e0565b6118959161297c565b60801c60c08301526118ab604c604887896127e0565b6118b491612852565b60e01c602082015261119e6050604c87896127e0565b73ffffffffffffffffffffffffffffffffffffffff8316156118f1576109b1838383611af8565b6109b18282611c7a565b73ffffffffffffffffffffffffffffffffffffffff831661191b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611968576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156119dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a0191906129c2565b10156109b1576109b183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611da4565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611af1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610b38565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611b45576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611b92576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611bff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c2391906129c2565b905080821115611c69576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b38565b611c74848484611f12565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611cc7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611d0a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610b38565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611d64576040519150601f19603f3d011682016040523d82523d6000602084013e611d69565b606091505b50509050806109b1576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611e308482611f68565b611c745760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611f089085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612029565b611c748482612029565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109b19084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611e86565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611f9291906129db565b6000604051808303816000865af19150503d8060008114611fcf576040519150601f19603f3d011682016040523d82523d6000602084013e611fd4565b606091505b5091509150818015611ffe575080511580611ffe575080806020019051810190611ffe91906129f7565b8015612020575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b600061208b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121389092919063ffffffff16565b90508051600014806120ac5750808060200190518101906120ac91906129f7565b6109b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b38565b60606121478484600085612151565b90505b9392505050565b6060824710156121e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b38565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161220c91906129db565b60006040518083038185875af1925050503d8060008114612249576040519150601f19603f3d011682016040523d82523d6000602084013e61224e565b606091505b509150915061225f8783838761226c565b925050505b949350505050565b606083156123025782516000036122fb5773ffffffffffffffffffffffffffffffffffffffff85163b6122fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b38565b5081612264565b61226483838151156123175781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3891906125ab565b73ffffffffffffffffffffffffffffffffffffffff8116811461236d57600080fd5b50565b803567ffffffffffffffff8116811461238857600080fd5b919050565b803563ffffffff8116811461238857600080fd5b600080600080600060a086880312156123b957600080fd5b8535945060208601356123cb8161234b565b93506123d960408701612370565b92506123e760608701612370565b91506123f56080870161238d565b90509295509295909350565b60008083601f84011261241357600080fd5b50813567ffffffffffffffff81111561242b57600080fd5b6020830191508360208285010111156111b257600080fd5b60008060008060008060a0878903121561245c57600080fd5b86356124678161234b565b9550602087013567ffffffffffffffff81111561248357600080fd5b61248f89828a01612401565b90965094505060408701356124a38161234b565b925060608701356124b38161234b565b80925050608087013590509295509295509295565b600080602083850312156124db57600080fd5b823567ffffffffffffffff808211156124f357600080fd5b818501915085601f83011261250757600080fd5b81358181111561251657600080fd5b8660208260051b850101111561252b57600080fd5b60209290920196919550909350505050565b60005b83811015612558578181015183820152602001612540565b50506000910152565b6000815180845261257981602086016020860161253d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061214a6020830184612561565b600080600080600080600060e0888a0312156125d957600080fd5b8735965060208801356125eb8161234b565b95506125f960408901612370565b945060608801356126098161234b565b93506080880135925061261e60a08901612370565b915061262c60c0890161238d565b905092959891949750929550565b6000806020838503121561264d57600080fd5b823567ffffffffffffffff81111561266457600080fd5b61267085828601612401565b90969095509350505050565b6060815282516060820152600060208401516101408060808501526126a56101a0850183612561565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08584030160a08601526126e08382612561565b925050606086015161270a60c086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060a08601516101006127568187018373ffffffffffffffffffffffffffffffffffffffff169052565b60c08801519150610120828188015260e08901518488015281890151935061278361016088018515159052565b8801518015156101808801529250612799915050565b50905061214a6020830184805163ffffffff16825260209081015167ffffffffffffffff16910152565b6000602082840312156127d557600080fd5b813561214a8161234b565b600080858511156127f057600080fd5b838611156127fd57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000813581811691601485101561284a5780818660140360031b1b83161692505b505092915050565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561284a5760049490940360031b84901b1690921692915050565b7fffffffffffffffff000000000000000000000000000000000000000000000000813581811691600885101561284a5760089490940360031b84901b1690921692915050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612975577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000813581811691601085101561284a5760109490940360031b84901b1690921692915050565b6000602082840312156129d457600080fd5b5051919050565b600082516129ed81846020870161253d565b9190910192915050565b600060208284031215612a0957600080fd5b8151801515811461214a57600080fdfea2646970667358221220f9a359b0532be8494d3c17b7c90b306132a7268da0f6e44babd24294501f6ce064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_cBridge";
            readonly type: "address";
            readonly internalType: "contract ICBridge";
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
        readonly name: "decode_startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeERC20Min";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeNativeMin";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "triggerRefund";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "CBridgeRefund";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiCBridgeTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
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
    static createInterface(): CBridgeFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacetPacked;
}
export {};
