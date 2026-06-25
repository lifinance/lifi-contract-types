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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612ac0380380612ac083398101604081905261002e9161014b565b5f80546001600160a01b0319166001600160a01b03868116919091179091558516158061006257506001600160a01b038416155b8061007457506001600160a01b038316155b8061008657506001600160a01b038216155b8061009857506001600160a01b038116155b156100b65760405163d92e233d60e01b815260040160405180910390fd5b6017853b116100d8576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03948516608052600280549386166001600160a01b031994851617905560038054928616928416929092179091556004805491909416911617909155506009805461ffff1916611f401790556101ac565b80516001600160a01b0381168114610146575f5ffd5b919050565b5f5f5f5f5f60a0868803121561015f575f5ffd5b61016886610130565b945061017660208701610130565b935061018460408701610130565b925061019260608701610130565b91506101a060808701610130565b90509295509295909350565b6080516128f56101cb5f395f81816102dc015261194901526128f55ff3fe608060405234801561000f575f5ffd5b50600436106101bb575f3560e01c80637b0e24e1116100f3578063dab297c311610093578063f12d54d81161006e578063f12d54d814610457578063f294e72b1461045f578063f2fde38b14610480578063fec7e26f14610493575f5ffd5b8063dab297c314610404578063e30c397814610417578063f0882a0214610437575f5ffd5b80639a07d5cf116100ce5780639a07d5cf146103b4578063c3122044146103d6578063c983fab3146103e9578063ce190578146103fc575f5ffd5b80637b0e24e11461034d5780638da5cb5b146103605780638e640ae41461037f575f5ffd5b80633d312f6d1161015e57806349493a4d1161013957806349493a4d146102d757806361a552dc146102fe5780636b44e6be146103235780637200b82914610345575f5ffd5b80633d312f6d1461027f5780633e70838b14610292578063431a20ae146102a5575f5ffd5b806310ef43871161019957806310ef43871461023c57806319ac97361461024f57806323452b9c1461026457806331f8ef051461026c575f5ffd5b8063026f4b1e146101bf578063065b3adf146102095780630bae1c8a14610229575b5f5ffd5b6004546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6002546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6101df610237366004611e72565b6104db565b6101df61024a366004611eb7565b61054d565b61026261025d366004611f03565b610ad1565b005b610262610bf8565b61026261027a366004611f36565b610cc1565b61026261028d366004611f03565b610dcc565b6102626102a0366004611f36565b610f31565b6102c76102b3366004611f36565b60076020525f908152604090205460ff1681565b6040519015158152602001610200565b6101df7f000000000000000000000000000000000000000000000000000000000000000081565b6004546102c79074010000000000000000000000000000000000000000900460ff1681565b6102c7610331366004611f36565b600a6020525f908152604090205460ff1681565b61026261106f565b61026261035b366004611f70565b611153565b5f546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6101df61038d366004611fb0565b60066020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6102c76103c2366004611f36565b60056020525f908152604090205460ff1681565b6102626103e4366004611fc7565b6112eb565b6102626103f7366004611fe0565b6113e2565b6102626114e7565b610262610412366004611f36565b611598565b6001546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6102626116d6565b60095461046d9061ffff1681565b60405161ffff9091168152602001610200565b61026261048e366004611f36565b611799565b6104c06104a136600461200e565b60086020525f908152604090205461ffff808216916201000090041682565b6040805161ffff938416815292909116602083015201610200565b60408051602080820187905273ffffffffffffffffffffffffffffffffffffffff808716838501528516606083015260808083018590528351808403909101815260a090920190925280519101205f90610544906105376118f5565b80519060200120306119c1565b95945050505050565b5f8135610586576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff1633148015906105d3575081355f9081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b1561060a576040517f164c83eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61061b6040840160208501611f36565b73ffffffffffffffffffffffffffffffffffffffff1603610668576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075f61067b6060850160408601611f36565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff166106da576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055f6106ed6080850160608601611f36565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff1661074c576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107756107606060850160408601611f36565b6107706080860160608701611f36565b611a00565b90506107838360a001611ae6565b5f6107966101c085016101a08601611fc7565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000161ffff8216016107d0575060095461ffff16610878565b61271061ffff82161115610810576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff163314801590610841575060095461ffff908116908216115b15610878576040517f68bb4e9400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108f4853561088e6060880160408901611f36565b61089e6080890160608a01611f36565b6040805160208082019590955273ffffffffffffffffffffffffffffffffffffffff938416818301529190921660608201526080808a0135828201528251808303909101815260a0909101909152805191012090565b90506109085f826109036118f5565b611ced565b73ffffffffffffffffffffffffffffffffffffffff81165f908152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905593506109676080860160608701611f36565b73ffffffffffffffffffffffffffffffffffffffff9081169086359086167f538c3621a2292bd29880e1a10edb2e05c5d78f2631535a5b26fea5cfa5d8a5236109b660608a0160408b01611f36565b876109c760408c0160208d01611f36565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152928416602084015292168183015261ffff8816606082015260808b8101359082015260a0810187905290519081900360c00190a473ffffffffffffffffffffffffffffffffffffffff8416630f2da77684610a466080890160608a01611f36565b610a5660608a0160408b01611f36565b610a6660408b0160208c01611f36565b8760a08c01610a796101c08e018e612027565b6040518963ffffffff1660e01b8152600401610a9c9897969594939291906120d6565b5f604051808303815f87803b158015610ab3575f5ffd5b505af1158015610ac5573d5f5f3e3d5ffd5b50505050505050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b21576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b6e576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c48576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610c97576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610d11576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d5e576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f7975b7b666747c0c864931c51b88cf8c4fe1fb5d993612cfb84524fbf166bdf2905f90a250565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610e1c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e69576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015610e7857506017823b11155b15610eaf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526007602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b9101610bec565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610f81576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610fce576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610bec565b60015473ffffffffffffffffffffffffffffffffffffffff163381146110c1576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146111a3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff1611806111c857506111bd83611ddd565b61ffff168161ffff16115b156111ff576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060085f856003811115611231576112316121e0565b6003811115611242576112426121e0565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009094169216919091179190911790558260038111156112a8576112a86121e0565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461133b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff8216111561137b576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600980547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60035473ffffffffffffffffffffffffffffffffffffffff163314611433576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161146a576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917f3def9dd5d6064865cf41d6faa1357fba7e4c253bd4245a5eaca3c4a473fa5f1e9190a35050565b60025473ffffffffffffffffffffffffffffffffffffffff163314611538576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146115e8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611635576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610bec565b60025473ffffffffffffffffffffffffffffffffffffffff163314611727576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea09060200161158e565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146117e9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611836576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611885576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b60606040518060200161190790611e41565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116602081810160409081525f835251611971927f00000000000000000000000000000000000000000000000000000000000000009290910161220d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526119ad9291602001612294565b604051602081830303815290604052905090565b5f604051836040820152846020820152828152600b8101905060ff81536055902073ffffffffffffffffffffffffffffffffffffffff16949350505050565b6040517fae1c160c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063ae1c160c90602401602060405180830381865afa158015611a6d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a9191906122b0565b905073ffffffffffffffffffffffffffffffffffffffff8116611ae0576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b92915050565b5f5b600360ff821611611ce957816080018160ff1660048110611b0b57611b0b6122cb565b602002016020810190611b1e91906122f8565b611b8a578160ff821660048110611b3757611b376122cb565b602002016020810190611b4a9190611fc7565b61ffff1615611b85576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cd9565b5f8260ff831660048110611ba057611ba06122cb565b602002016020810190611bb39190611fc7565b9050611bd28260ff166003811115611bcd57611bcd6121e0565b611ddd565b61ffff168161ffff161115611c13576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60085f8460ff166003811115611c2c57611c2c6121e0565b6003811115611c3d57611c3d6121e0565b6003811115611c4e57611c4e6121e0565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611c9f5750806020015161ffff168261ffff16115b15611cd6576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b611ce281612311565b9050611ae8565b5050565b5f83471015611d35576040517fcf4791810000000000000000000000000000000000000000000000000000000081524760048201526024810185905260440160405180910390fd5b81515f03611d6f576040517f4ca249dc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8282516020840186f5905073ffffffffffffffffffffffffffffffffffffffff8116611dd6573d5f03611dce576040517fb06ebf3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611dd6611e36565b9392505050565b6040805160808101825261138881526103e860208201526107d091810182905260608101919091525f9080836003811115611e1a57611e1a6121e0565b60048110611e2a57611e2a6122cb565b60200201519392505050565b6040513d5f823e3d81fd5b61056b8061235583390190565b73ffffffffffffffffffffffffffffffffffffffff81168114611e6f575f5ffd5b50565b5f5f5f5f60808587031215611e85575f5ffd5b843593506020850135611e9781611e4e565b92506040850135611ea781611e4e565b9396929550929360600135925050565b5f60208284031215611ec7575f5ffd5b813567ffffffffffffffff811115611edd575f5ffd5b82016101e08185031215611dd6575f5ffd5b80358015158114611efe575f5ffd5b919050565b5f5f60408385031215611f14575f5ffd5b8235611f1f81611e4e565b9150611f2d60208401611eef565b90509250929050565b5f60208284031215611f46575f5ffd5b8135611dd681611e4e565b803560048110611efe575f5ffd5b803561ffff81168114611efe575f5ffd5b5f5f5f60608486031215611f82575f5ffd5b611f8b84611f51565b9250611f9960208501611f5f565b9150611fa760408501611f5f565b90509250925092565b5f60208284031215611fc0575f5ffd5b5035919050565b5f60208284031215611fd7575f5ffd5b611dd682611f5f565b5f5f60408385031215611ff1575f5ffd5b82359150602083013561200381611e4e565b809150509250929050565b5f6020828403121561201e575f5ffd5b611dd682611f51565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261205a575f5ffd5b83018035915067ffffffffffffffff821115612074575f5ffd5b602001915036819003821315612088575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff8716604082015273ffffffffffffffffffffffffffffffffffffffff8616606082015261ffff851660808201525f60a08201855f5b60048110156121805761ffff61216a83611f5f565b1683526020928301929190910190600101612155565b5050506101208201608086015f5b60048110156121b7576121a082611eef565b15158352602092830192919091019060010161218e565b5050506101c06101a08301526121d26101c08301848661208f565b9a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f81518060208401855e5f93019283525090919050565b5f6122a86122a2838661227d565b8461227d565b949350505050565b5f602082840312156122c0575f5ffd5b8151611dd681611e4e565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215612308575f5ffd5b611dd682611eef565b5f60ff821660ff810361234b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b6001019291505056fe60a060405260405161056b38038061056b83398101604081905261002291610331565b61002c828261003e565b506001600160a01b0316608052610413565b610047826100fb565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e905f90a28051156100ef576100ea826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100e491906103f3565b82610209565b505050565b6100f76102aa565b5050565b806001600160a01b03163b5f0361013557604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b815290515f92841691635c60da1b9160048083019260209291908290030181865afa1580156101ae573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101d291906103f3565b9050806001600160a01b03163b5f036100f757604051634c9c8ce360e01b81526001600160a01b038216600482015260240161012c565b60605f61021684846102cb565b905080801561023757505f3d118061023757505f846001600160a01b03163b115b1561024c576102446102de565b9150506102a4565b801561027657604051639996b31560e01b81526001600160a01b038516600482015260240161012c565b3d15610289576102846102f7565b6102a2565b60405163d6bda27560e01b815260040160405180910390fd5b505b92915050565b34156102c95760405163b398979f60e01b815260040160405180910390fd5b565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b80516001600160a01b0381168114610318575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f60408385031215610342575f5ffd5b61034b83610302565b60208401519092506001600160401b03811115610366575f5ffd5b8301601f81018513610376575f5ffd5b80516001600160401b0381111561038f5761038f61031d565b604051601f8201601f19908116603f011681016001600160401b03811182821017156103bd576103bd61031d565b6040528181528282016020018710156103d4575f5ffd5b8160208401602083015e5f602083830101528093505050509250929050565b5f60208284031215610403575f5ffd5b61040c82610302565b9392505050565b60805161014161042a5f395f602301526101415ff3fe608060405261000c61000e565b005b61001e610019610020565b6100b3565b565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100ae91906100d1565b905090565b365f5f375f5f365f845af43d5f5f3e8080156100cd573d5ff35b3d5ffd5b5f602082840312156100e1575f5ffd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610104575f5ffd5b939250505056fea264697066735822122044339d359b5daa4c46fb689605b1d8768ffc643eed36e97fd7b9aa1564dad1b264736f6c634300081d0033a2646970667358221220937e90cc17ae542cf04aab27416479c2f54132769cc3653ed8ff0673c4d7d44f64736f6c634300081d0033";
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
                }, {
                    readonly name: "enabled";
                    readonly type: "bool[4]";
                    readonly internalType: "bool[4]";
                }];
            }, {
                readonly name: "integratorShareBps";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "initData";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
            readonly name: "_newOwner";
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
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
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
        readonly name: "AssetResolutionFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Create2EmptyBytecode";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DisabledFeeMustBeZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedDeployment";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateAboveBound";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateAboveCap";
        readonly inputs: readonly [];
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
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
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
