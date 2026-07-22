import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiVaultWrapperFactory, LiFiVaultWrapperFactoryInterface } from "../LiFiVaultWrapperFactory";
type LiFiVaultWrapperFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiVaultWrapperFactory__factory extends ContractFactory {
    constructor(...args: LiFiVaultWrapperFactoryConstructorParams);
    deploy(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, _lifiFeeRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiVaultWrapperFactory>;
    getDeployTransaction(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, _lifiFeeRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiVaultWrapperFactory;
    connect(signer: Signer): LiFiVaultWrapperFactory__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516127f23803806127f283398101604081905261002e916101cd565b836001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006581610147565b506001600160a01b038516158061008357506001600160a01b038316155b8061009557506001600160a01b038216155b806100a757506001600160a01b038116155b156100c55760405163d92e233d60e01b815260040160405180910390fd5b846001600160a01b03163b5f036100ef576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03948516608052600280549386166001600160a01b031994851617905560038054928616928416929092179091556004805491909416911617909155506009805461ffff1916611f4017905561022e565b600180546001600160a01b031916905561016081610163565b50565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146101c8575f5ffd5b919050565b5f5f5f5f5f60a086880312156101e1575f5ffd5b6101ea866101b2565b94506101f8602087016101b2565b9350610206604087016101b2565b9250610214606087016101b2565b9150610222608087016101b2565b90509295509295909350565b6080516125a561024d5f395f81816102d401526114d901526125a55ff3fe608060405234801561000f575f5ffd5b50600436106101bb575f3560e01c80637b0e24e1116100f3578063dab297c311610093578063f12d54d81161006e578063f12d54d814610453578063f294e72b1461045b578063f2fde38b1461047c578063fec7e26f1461048f575f5ffd5b8063dab297c314610402578063e30c397814610415578063f0882a0214610433575f5ffd5b80639a07d5cf116100ce5780639a07d5cf146103b2578063c3122044146103d4578063c983fab3146103e7578063ce190578146103fa575f5ffd5b80637b0e24e11461034d5780638da5cb5b146103605780638e640ae41461037d575f5ffd5b80633e70838b1161015e57806361a552dc1161013957806361a552dc146102f65780636b44e6be1461031b578063715018a61461033d57806379ba509714610345575f5ffd5b80633e70838b1461028a578063431a20ae1461029d57806349493a4d146102cf575f5ffd5b806319ac97361161019957806319ac97361461023c578063215f76aa1461025157806331f8ef05146102645780633d312f6d14610277575f5ffd5b8063026f4b1e146101bf578063065b3adf146102095780630bae1c8a14610229575b5f5ffd5b6004546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6002546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6101df610237366004611b20565b6104d7565b61024f61024a366004611b65565b610549565b005b6101df61025f366004611ba0565b610628565b61024f610272366004611bd8565b610ad2565b61024f610285366004611b65565b610b95565b61024f610298366004611bd8565b610cc5565b6102bf6102ab366004611bd8565b60076020525f908152604090205460ff1681565b6040519015158152602001610200565b6101df7f000000000000000000000000000000000000000000000000000000000000000081565b6004546102bf9074010000000000000000000000000000000000000000900460ff1681565b6102bf610329366004611bd8565b600a6020525f908152604090205460ff1681565b61024f610dbb565b61024f610ded565b61024f61035b366004611c17565b610e69565b5f5473ffffffffffffffffffffffffffffffffffffffff166101df565b6101df61038b366004611c57565b60066020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6102bf6103c0366004611bd8565b60056020525f908152604090205460ff1681565b61024f6103e2366004611c6e565b610fb9565b61024f6103f5366004611c87565b611067565b61024f61116c565b61024f610410366004611bd8565b61121d565b60015473ffffffffffffffffffffffffffffffffffffffff166101df565b6003546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b61024f611313565b6009546104699061ffff1681565b60405161ffff9091168152602001610200565b61024f61048a366004611bd8565b6113d6565b6104bc61049d366004611caa565b60086020525f908152604090205461ffff808216916201000090041682565b6040805161ffff938416815292909116602083015201610200565b60408051602080820187905273ffffffffffffffffffffffffffffffffffffffff808716838501528516606083015260808083018590528351808403909101815260a090920190925280519101205f9061054090610533611485565b8051906020012030611551565b95945050505050565b610551611590565b73ffffffffffffffffffffffffffffffffffffffff821661059e576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f8135610661576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff1633148015906106ae575081355f9081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b156106e5576040517f164c83eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106f66040840160208501611bd8565b73ffffffffffffffffffffffffffffffffffffffff1603610743576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075f6107566060850160408601611bd8565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff166107b5576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055f6107c86080850160608601611bd8565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610827576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108338260a0016115e4565b5f610841836101200161176f565b90505f6108bf84356108596060870160408801611bd8565b6108696080880160608901611bd8565b6040805160208082019590955273ffffffffffffffffffffffffffffffffffffffff93841681830152919092166060820152608080890135828201528251808303909101815260a0909101909152805191012090565b90506108d35f826108ce611485565b6118df565b73ffffffffffffffffffffffffffffffffffffffff81165f818152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055909350639835b23b6109386080870160608801611bd8565b6109486060880160408901611bd8565b6109586040890160208a01611bd8565b8660a08a0161096b6101c08c018c611cc3565b61097d6101c08e016101a08f01611bd8565b6040518963ffffffff1660e01b81526004016109a0989796959493929190611dc4565b5f604051808303815f87803b1580156109b7575f5ffd5b505af11580156109c9573d5f5f3e3d5ffd5b506109de925050506080850160608601611bd8565b73ffffffffffffffffffffffffffffffffffffffff9081169085359085167fe873e01c3f29cd1e6884dcb76522ef8298beaca6950c706e7fdd41af52292473610a2d6060890160408a01611bd8565b8773ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a76573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a9a9190611e9c565b610aaa60408b0160208c01611bd8565b888b6080013589604051610ac396959493929190611eb7565b60405180910390a45050919050565b610ada611590565b73ffffffffffffffffffffffffffffffffffffffff8116610b27576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f7975b7b666747c0c864931c51b88cf8c4fe1fb5d993612cfb84524fbf166bdf2905f90a250565b610b9d611590565b73ffffffffffffffffffffffffffffffffffffffff8216610bea576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015610c0c575073ffffffffffffffffffffffffffffffffffffffff82163b155b15610c43576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526007602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b910161061c565b610ccd611590565b73ffffffffffffffffffffffffffffffffffffffff8116610d1a576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a910161061c565b6040517f8905116500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600154339073ffffffffffffffffffffffffffffffffffffffff168114610e5d576040517f118cdaa700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024015b60405180910390fd5b610e66816119cb565b50565b610e71611590565b8061ffff168261ffff161180610e965750610e8b836119fc565b61ffff168161ffff16115b15610ecd576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060085f856003811115610eff57610eff611f07565b6003811115610f1057610f10611f07565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000909416921691909117919091179055826003811115610f7657610f76611f07565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b610fc1611590565b61271061ffff821610611000576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600980547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60035473ffffffffffffffffffffffffffffffffffffffff1633146110b8576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816110ef576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917f3def9dd5d6064865cf41d6faa1357fba7e4c253bd4245a5eaca3c4a473fa5f1e9190a35050565b60025473ffffffffffffffffffffffffffffffffffffffff1633146111bd576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b611225611590565b73ffffffffffffffffffffffffffffffffffffffff8116611272576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a910161061c565b60025473ffffffffffffffffffffffffffffffffffffffff163314611364576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea090602001611213565b6113de611590565b6001805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000090911681179091556114405f5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60606040518060200161149790611ad4565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116602081810160409081525f835251611501927f000000000000000000000000000000000000000000000000000000000000000092909101611f34565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261153d9291602001611fbb565b604051602081830303815290604052905090565b5f604051836040820152846020820152828152600b8101905060ff81536055902073ffffffffffffffffffffffffffffffffffffffff16949350505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146115e2576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610e54565b565b5f5b600481101561176b575f82826004811061160257611602611fd7565b6020020160208101906116159190611c6e565b90508061ffff165f036116285750611763565b61164282600381111561163d5761163d611f07565b6119fc565b61ffff168161ffff161115611683576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60085f84600381111561169957611699611f07565b60038111156116aa576116aa611f07565b60038111156116bb576116bb611f07565b815260208082019290925260409081015f2081518083019092525461ffff80821680845262010000909204811693830193909352909250908316108061170c5750806020015161ffff168261ffff16115b1561176057805160208201516040517f56ccb19600000000000000000000000000000000000000000000000000000000815261ffff8086166004830152928316602482015291166044820152606401610e54565b50505b6001016115e6565b5050565b611777611ae1565b60095460035461ffff9091169073ffffffffffffffffffffffffffffffffffffffff163314155f5b60048110156118d7575f8582600481106117bb576117bb611fd7565b6020020160208101906117ce9190611c6e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000161ffff821601611822578385836004811061180e5761180e611fd7565b61ffff9092166020929092020152506118cf565b61271061ffff821610611861576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82801561187557508361ffff168161ffff16115b156118ac576040517f68bb4e9400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808583600481106118bf576118bf611fd7565b61ffff9092166020929092020152505b60010161179f565b505050919050565b5f83471015611923576040517fcf47918100000000000000000000000000000000000000000000000000000000815247600482015260248101859052604401610e54565b81515f0361195d576040517f4ca249dc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8282516020840186f5905073ffffffffffffffffffffffffffffffffffffffff81166119c4573d5f036119bc576040517fb06ebf3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119c4611a55565b9392505050565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055610e6681611a60565b6040805160808101825261138881526103e860208201526107d091810182905260608101919091525f9080836003811115611a3957611a39611f07565b60048110611a4957611a49611fd7565b60200201519392505050565b6040513d5f823e3d81fd5b5f805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61056b8061200583390190565b60405180608001604052806004906020820280368337509192915050565b73ffffffffffffffffffffffffffffffffffffffff81168114610e66575f5ffd5b5f5f5f5f60808587031215611b33575f5ffd5b843593506020850135611b4581611aff565b92506040850135611b5581611aff565b9396929550929360600135925050565b5f5f60408385031215611b76575f5ffd5b8235611b8181611aff565b915060208301358015158114611b95575f5ffd5b809150509250929050565b5f60208284031215611bb0575f5ffd5b813567ffffffffffffffff811115611bc6575f5ffd5b82016101e081850312156119c4575f5ffd5b5f60208284031215611be8575f5ffd5b81356119c481611aff565b803560048110611c01575f5ffd5b919050565b803561ffff81168114611c01575f5ffd5b5f5f5f60608486031215611c29575f5ffd5b611c3284611bf3565b9250611c4060208501611c06565b9150611c4e60408501611c06565b90509250925092565b5f60208284031215611c67575f5ffd5b5035919050565b5f60208284031215611c7e575f5ffd5b6119c482611c06565b5f5f60408385031215611c98575f5ffd5b823591506020830135611b9581611aff565b5f60208284031215611cba575f5ffd5b6119c482611bf3565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cf6575f5ffd5b83018035915067ffffffffffffffff821115611d10575f5ffd5b6020019150600681901b3603821315611d27575f5ffd5b9250929050565b805f5b6004811015611d5457815161ffff16845260209384019390910190600101611d31565b50505050565b8183526020830192505f815f5b84811015611dba578135611d7a81611aff565b73ffffffffffffffffffffffffffffffffffffffff16865261ffff611da160208401611c06565b1660208701526040958601959190910190600101611d67565b5093949350505050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff87166040820152611e226060820187611d2e565b5f60e08201865f5b6004811015611e555761ffff611e3f83611c06565b1683526020928301929190910190600101611e2a565b5050506101a0610160830152611e706101a083018587611d5a565b73ffffffffffffffffffffffffffffffffffffffff841661018084015290509998505050505050505050565b5f60208284031215611eac575f5ffd5b81516119c481611aff565b73ffffffffffffffffffffffffffffffffffffffff87811682528681166020830152851660408201526101208101611ef26060830186611d2e565b60e08201939093526101000152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f81518060208401855e5f93019283525090919050565b5f611fcf611fc98386611fa4565b84611fa4565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfe60a060405260405161056b38038061056b83398101604081905261002291610331565b61002c828261003e565b506001600160a01b0316608052610413565b610047826100fb565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e905f90a28051156100ef576100ea826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100e491906103f3565b82610209565b505050565b6100f76102aa565b5050565b806001600160a01b03163b5f0361013557604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b815290515f92841691635c60da1b9160048083019260209291908290030181865afa1580156101ae573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101d291906103f3565b9050806001600160a01b03163b5f036100f757604051634c9c8ce360e01b81526001600160a01b038216600482015260240161012c565b60605f61021684846102cb565b905080801561023757505f3d118061023757505f846001600160a01b03163b115b1561024c576102446102de565b9150506102a4565b801561027657604051639996b31560e01b81526001600160a01b038516600482015260240161012c565b3d15610289576102846102f7565b6102a2565b60405163d6bda27560e01b815260040160405180910390fd5b505b92915050565b34156102c95760405163b398979f60e01b815260040160405180910390fd5b565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b80516001600160a01b0381168114610318575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f60408385031215610342575f5ffd5b61034b83610302565b60208401519092506001600160401b03811115610366575f5ffd5b8301601f81018513610376575f5ffd5b80516001600160401b0381111561038f5761038f61031d565b604051601f8201601f19908116603f011681016001600160401b03811182821017156103bd576103bd61031d565b6040528181528282016020018710156103d4575f5ffd5b8160208401602083015e5f602083830101528093505050509250929050565b5f60208284031215610403575f5ffd5b61040c82610302565b9392505050565b60805161014161042a5f395f602301526101415ff3fe608060405261000c61000e565b005b61001e610019610020565b6100b3565b565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100ae91906100d1565b905090565b365f5f375f5f365f845af43d5f5f3e8080156100cd573d5ff35b3d5ffd5b5f602082840312156100e1575f5ffd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610104575f5ffd5b939250505056fea2646970667358221220ee76f16cc39d29fc9dd8ea978ab34ef604449cddbd61d76906e81527eb11d8d764736f6c634300081d0033a2646970667358221220a9acd02896c213508b30fb1a7db7606cface08bdcfdb9bcb94db301bde4be3b064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_beacon";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_emergencyPauser";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_onboardingManager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_lifiFeeRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "BEACON";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "acceptOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "allowedUnderlying";
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
        readonly name: "approvedAdapter";
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
        readonly name: "approvedIntegratorDeployer";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "defaultIntegratorShareBps";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deploy";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct DeployParams";
            readonly components: readonly [{
                readonly name: "namespace";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "vaultWrapperAdmin";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "adapter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "underlying";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct FeeConfig";
                readonly components: readonly [{
                    readonly name: "rateBps";
                    readonly type: "uint16[4]";
                    readonly internalType: "uint16[4]";
                }];
            }, {
                readonly name: "integratorShareBps";
                readonly type: "uint16[4]";
                readonly internalType: "uint16[4]";
            }, {
                readonly name: "accessGate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivers";
                readonly type: "tuple[]";
                readonly internalType: "struct FeeReceiver[]";
                readonly components: readonly [{
                    readonly name: "wallet";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "bps";
                    readonly type: "uint16";
                    readonly internalType: "uint16";
                }];
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "instance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "emergencyPauser";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeBounds";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum FeeType";
        }];
        readonly outputs: readonly [{
            readonly name: "minBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "globalPause";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "globalPaused";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "globalUnpause";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isInstance";
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
        readonly name: "lifiFeeRecipient";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "onboardingManager";
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
        readonly name: "predictAddress";
        readonly inputs: readonly [{
            readonly name: "_namespace";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "renounceOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "setAdapterApproved";
        readonly inputs: readonly [{
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApprovedIntegratorDeployer";
        readonly inputs: readonly [{
            readonly name: "_namespace";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setDefaultSplit";
        readonly inputs: readonly [{
            readonly name: "_integratorBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setEmergencyPauser";
        readonly inputs: readonly [{
            readonly name: "_newPauser";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFeeBounds";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "_minBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_maxBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setLifiFeeRecipient";
        readonly inputs: readonly [{
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setOnboardingManager";
        readonly inputs: readonly [{
            readonly name: "_newManager";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUnderlyingAllowed";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AdapterApprovedSet";
        readonly inputs: readonly [{
            readonly name: "adapter";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DefaultSplitSet";
        readonly inputs: readonly [{
            readonly name: "integratorBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeeBoundsSet";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "minBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }, {
            readonly name: "maxBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GlobalPauseSet";
        readonly inputs: readonly [{
            readonly name: "paused";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "by";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntegratorDeployerSet";
        readonly inputs: readonly [{
            readonly name: "namespace";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "deployer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LifiFeeRecipientSet";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferStarted";
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
        readonly name: "RoleRotated";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "oldAddr";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newAddr";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "UnderlyingAllowedSet";
        readonly inputs: readonly [{
            readonly name: "underlying";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "allowed";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "WrapperDeployed";
        readonly inputs: readonly [{
            readonly name: "instance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "namespace";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "underlying";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "adapter";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "vaultWrapperAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "integratorShareBps";
            readonly type: "uint16[4]";
            readonly indexed: false;
            readonly internalType: "uint16[4]";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AdapterNotApproved";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Create2EmptyBytecode";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedDeployment";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateAboveCap";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateOutOfBounds";
        readonly inputs: readonly [{
            readonly name: "rateBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "minBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntegratorShareAboveDefault";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSplit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotApprovedDeployer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotEmergencyPauser";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotOnboardingManager";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OwnableInvalidOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "OwnableUnauthorizedAccount";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "RenounceDisabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnderlyingNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroNamespace";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiVaultWrapperFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiVaultWrapperFactory;
}
export {};
