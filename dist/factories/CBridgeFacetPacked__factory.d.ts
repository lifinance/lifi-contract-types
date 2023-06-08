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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002b4f38038062002b4f833981016040819052620000349162000073565b600080546001600160a01b0319166001600160a01b0392831617905516608052620000b2565b6001600160a01b03811681146200007057600080fd5b50565b600080604083850312156200008757600080fd5b825162000094816200005a565b6020840151909250620000a7816200005a565b809150509250929050565b608051612a5e620000f16000396000818161030901528181610524015281816106500152818161095a015281816112cf01526115dc0152612a5e6000f3fe6080604052600436106100eb5760003560e01c8063a2ed56071161008a578063e30c397811610059578063e30c397814610270578063f2fde38b1461029d578063f6848697146102bd578063fc852c5a146102d257600080fd5b8063a2ed5607146101d5578063aef365ad14610202578063be8a84ac14610222578063dee4be1b1461025057600080fd5b806323452b9c116100c657806323452b9c146101345780634c478642146101495780637200b829146101695780638da5cb5b1461017e57600080fd5b806278afb6146100f75780630193979f146101015780630d19e5191461011457600080fd5b366100f257005b600080fd5b6100ff6102f2565b005b6100ff61010f3660046123b0565b6104b3565b34801561012057600080fd5b506100ff61012f366004612452565b6105e6565b34801561014057600080fd5b506100ff610808565b34801561015557600080fd5b506100ff6101643660046124d7565b6108d2565b34801561017557600080fd5b506100ff6109b6565b34801561018a57600080fd5b506000546101ab9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101e157600080fd5b506101f56101f03660046123b0565b610a9c565b6040516101cc91906125ba565b34801561020e57600080fd5b506101f561021d3660046125cd565b610cb7565b34801561022e57600080fd5b5061024261023d366004612649565b610fa4565b6040516101cc92919061268b565b34801561025c57600080fd5b506100ff61026b3660046125cd565b6111b9565b34801561027c57600080fd5b506001546101ab9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102a957600080fd5b506100ff6102b83660046127d2565b61138a565b3480156102c957600080fd5b506100ff6114e8565b3480156102de57600080fd5b506102426102ed366004612649565b61178d565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633f2e5fc33461033e6020600c3660006127ef565b61034791612819565b60601c3461035a602460203660006127ef565b61036391612861565b60e01c610375602860243660006127ef565b61037e91612861565b60e01c610390602c60283660006127ef565b61039991612861565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff969096166004820152602481019490945267ffffffffffffffff92831660448501529116606483015290911c608482015260a4016000604051808303818588803b15801561042757600080fd5b505af115801561043b573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32193506104749250600c9150600490503660006127ef565b61047d916128a7565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b6040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152346024830181905267ffffffffffffffff80871660448501528516606484015263ffffffff841660848401527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc3919060a4016000604051808303818588803b15801561056a57600080fd5b505af115801561057e573d6000803e3d6000fd5b50506040517fffffffffffffffff000000000000000000000000000000000000000000000000891681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de321935060200191506105d79050565b60405180910390a15050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610637576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16146106bc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516106e59291906128ed565b6000604051808303816000865af19150503d8060008114610722576040519150601f19603f3d011682016040523d82523d6000602084013e610727565b606091505b50508091505080610764576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610788578361078a565b335b90506107978582856119c5565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f856040516107f691815260200190565b60405180910390a35050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610859576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166108a8576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610923576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156109b15761099f838383818110610943576109436128fd565b905060200201602081019061095891906127d2565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119f6565b806109a98161292c565b915050610926565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610a08576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff67ffffffffffffffff85161115610b41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b63ffffffff67ffffffffffffffff84161115610bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b38565b50604080517e78afb60000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff00000000000000000000000000000000000000000000000096909616602487015260609490941b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602c8087019190915260e093841b7fffffffff000000000000000000000000000000000000000000000000000000009081168787015292841b83166044870152921b16604884015281518084039091018152604c909201905290565b606063ffffffff67ffffffffffffffff87161115610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610b38565b6fffffffffffffffffffffffffffffffff841115610df7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e74313238000000000000000000000000000000000000006064820152608401610b38565b63ffffffff67ffffffffffffffff84161115610e95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b38565b50604080517ff68486970000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000989098166024890152606096871b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8a015260e096871b7fffffffff000000000000000000000000000000000000000000000000000000009081168a8401529590971b909616604488015260809290921b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000166058870152831b8216606886015290911b16606c830152805180830360500181526070909201905290565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290602c831015611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610b38565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290611105600c600487896127ef565b61110e916128a7565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111406020600c87896127ef565b61114991612819565b60601c60a083015261115f6024602087896127ef565b61116891612861565b60e090811c9083015261117f6028602487896127ef565b61118891612861565b60e01c602082015261119e602c602887896127ef565b6111a791612861565b60e01c815290925090505b9250929050565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff8516906323b872dd906064016020604051808303816000875af1158015611232573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611256919061298b565b506040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301526044820185905267ffffffffffffffff80881660648401528416608483015263ffffffff831660a48301527f0000000000000000000000000000000000000000000000000000000000000000169063a5977fbb9060c401600060405180830381600087803b15801561131357600080fd5b505af1158015611327573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008a1681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de3219250602001905060405180910390a150505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113db576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611428576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611477576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006114f86038602436846127ef565b61150191612819565b60601c905060006115166048603836846127ef565b61151f916129ad565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260809190911c60448201819052915073ffffffffffffffffffffffffffffffffffffffff8316906323b872dd906064016020604051808303816000875af11580156115a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c4919061298b565b5073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a5977fbb6116106020600c3660006127ef565b61161991612819565b60601c848461162d602460203660006127ef565b61163691612861565b60e01c611648604c60483660006127ef565b61165191612861565b60e01c6116636050604c3660006127ef565b61166c91612861565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff9788166004830152959096166024870152604486019390935267ffffffffffffffff9182166064860152166084840152901c60a482015260c401600060405180830381600087803b15801561170157600080fd5b505af1158015611715573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de321925061174c9150600c905060043660006127ef565b611755916128a7565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290605083101561187f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e6774680000000000000000000000000000000000000000000000000000006064820152608401610b38565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906118ee600c600487896127ef565b6118f7916128a7565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526119296020600c87896127ef565b61193291612819565b60601c60a08301526119486024602087896127ef565b61195191612861565b60e090811c908301526119686038602487896127ef565b61197191612819565b60601c60808301526119876048603887896127ef565b611990916129ad565b60801c60c08301526119a6604c604887896127ef565b6119af91612861565b60e01c602082015261119e6050604c87896127ef565b73ffffffffffffffffffffffffffffffffffffffff8316156119ec576109b1838383611b39565b6109b18282611cbb565b73ffffffffffffffffffffffffffffffffffffffff8316611a1657505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a63576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611ad8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afc91906129f3565b10156109b157611b0e83836000611de5565b6109b183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611de5565b73ffffffffffffffffffffffffffffffffffffffff8316611b86576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611bd3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611c40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c6491906129f3565b905080821115611caa576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b38565b611cb5848484611fe5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611d08576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611d4b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610b38565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611da5576040519150601f19603f3d011682016040523d82523d6000602084013e611daa565b606091505b50509050806109b1576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801580611e8557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611e5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e8391906129f3565b155b611f11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610b38565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109b19084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261203b565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109b19084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611f63565b600061209d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121479092919063ffffffff16565b8051909150156109b157808060200190518101906120bb919061298b565b6109b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b38565b60606121568484600085612160565b90505b9392505050565b6060824710156121f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b38565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161221b9190612a0c565b60006040518083038185875af1925050503d8060008114612258576040519150601f19603f3d011682016040523d82523d6000602084013e61225d565b606091505b509150915061226e8783838761227b565b925050505b949350505050565b6060831561231157825160000361230a5773ffffffffffffffffffffffffffffffffffffffff85163b61230a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b38565b5081612273565b61227383838151156123265781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3891906125ba565b73ffffffffffffffffffffffffffffffffffffffff8116811461237c57600080fd5b50565b803567ffffffffffffffff8116811461239757600080fd5b919050565b803563ffffffff8116811461239757600080fd5b600080600080600060a086880312156123c857600080fd5b8535945060208601356123da8161235a565b93506123e86040870161237f565b92506123f66060870161237f565b91506124046080870161239c565b90509295509295909350565b60008083601f84011261242257600080fd5b50813567ffffffffffffffff81111561243a57600080fd5b6020830191508360208285010111156111b257600080fd5b60008060008060008060a0878903121561246b57600080fd5b86356124768161235a565b9550602087013567ffffffffffffffff81111561249257600080fd5b61249e89828a01612410565b90965094505060408701356124b28161235a565b925060608701356124c28161235a565b80925050608087013590509295509295509295565b600080602083850312156124ea57600080fd5b823567ffffffffffffffff8082111561250257600080fd5b818501915085601f83011261251657600080fd5b81358181111561252557600080fd5b8660208260051b850101111561253a57600080fd5b60209290920196919550909350505050565b60005b8381101561256757818101518382015260200161254f565b50506000910152565b6000815180845261258881602086016020860161254c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006121596020830184612570565b600080600080600080600060e0888a0312156125e857600080fd5b8735965060208801356125fa8161235a565b95506126086040890161237f565b945060608801356126188161235a565b93506080880135925061262d60a0890161237f565b915061263b60c0890161239c565b905092959891949750929550565b6000806020838503121561265c57600080fd5b823567ffffffffffffffff81111561267357600080fd5b61267f85828601612410565b90969095509350505050565b6060815282516060820152600060208401516101408060808501526126b46101a0850183612570565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08584030160a08601526126ef8382612570565b925050606086015161271960c086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060a08601516101006127658187018373ffffffffffffffffffffffffffffffffffffffff169052565b60c08801519150610120828188015260e08901518488015281890151935061279261016088018515159052565b88015180151561018088015292506127a8915050565b5090506121596020830184805163ffffffff16825260209081015167ffffffffffffffff16910152565b6000602082840312156127e457600080fd5b81356121598161235a565b600080858511156127ff57600080fd5b8386111561280c57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156128595780818660140360031b1b83161692505b505092915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128595760049490940360031b84901b1690921692915050565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156128595760089490940360031b84901b1690921692915050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612984577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561299d57600080fd5b8151801515811461215957600080fd5b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156128595760109490940360031b84901b1690921692915050565b600060208284031215612a0557600080fd5b5051919050565b60008251612a1e81846020870161254c565b919091019291505056fea2646970667358221220236ab124a3ad3422de69782ffa3c87101b3c1a73088e83af384f034a753dbe1464736f6c63430008110033";
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
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): CBridgeFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacetPacked;
}
export {};
