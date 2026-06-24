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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161242038038061242083398101604081905261002e9161014b565b5f80546001600160a01b0319166001600160a01b03868116919091179091558516158061006257506001600160a01b038416155b8061007457506001600160a01b038316155b8061008657506001600160a01b038216155b8061009857506001600160a01b038116155b156100b65760405163d92e233d60e01b815260040160405180910390fd5b6017853b116100d8576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03948516608052600280549386166001600160a01b031994851617905560038054928616928416929092179091556004805491909416911617909155506009805461ffff1916611f401790556101ac565b80516001600160a01b0381168114610146575f5ffd5b919050565b5f5f5f5f5f60a0868803121561015f575f5ffd5b61016886610130565b945061017660208701610130565b935061018460408701610130565b925061019260608701610130565b91506101a060808701610130565b90509295509295909350565b60805161224e6101d25f395f81816102dc0152818161053101526108a6015261224e5ff3fe608060405234801561000f575f5ffd5b50600436106101bb575f3560e01c80637b0e24e1116100f3578063dab297c311610093578063f12d54d81161006e578063f12d54d814610457578063f294e72b1461045f578063f2fde38b14610480578063fec7e26f14610493575f5ffd5b8063dab297c314610404578063e30c397814610417578063f0882a0214610437575f5ffd5b80639a07d5cf116100ce5780639a07d5cf146103b4578063c3122044146103d6578063c983fab3146103e9578063ce190578146103fc575f5ffd5b80637b0e24e11461034d5780638da5cb5b146103605780638e640ae41461037f575f5ffd5b80633d312f6d1161015e57806349493a4d1161013957806349493a4d146102d757806361a552dc146102fe5780636b44e6be146103235780637200b82914610345575f5ffd5b80633d312f6d1461027f5780633e70838b14610292578063431a20ae146102a5575f5ffd5b806310ef43871161019957806310ef43871461023c57806319ac97361461024f57806323452b9c1461026457806331f8ef051461026c575f5ffd5b8063026f4b1e146101bf578063065b3adf146102095780630bae1c8a14610229575b5f5ffd5b6004546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6002546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6101df610237366004611dd9565b6104db565b6101df61024a366004611e1e565b610560565b61026261025d366004611e6a565b610a94565b005b610262610bbb565b61026261027a366004611e9d565b610c84565b61026261028d366004611e6a565b610d8f565b6102626102a0366004611e9d565b610ef4565b6102c76102b3366004611e9d565b60076020525f908152604090205460ff1681565b6040519015158152602001610200565b6101df7f000000000000000000000000000000000000000000000000000000000000000081565b6004546102c79074010000000000000000000000000000000000000000900460ff1681565b6102c7610331366004611e9d565b600a6020525f908152604090205460ff1681565b610262611032565b61026261035b366004611ed7565b611116565b5f546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6101df61038d366004611f17565b60066020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6102c76103c2366004611e9d565b60056020525f908152604090205460ff1681565b6102626103e4366004611f2e565b6112ae565b6102626103f7366004611f47565b6113a5565b6102626114aa565b610262610412366004611e9d565b61155b565b6001546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b610262611699565b60095461046d9061ffff1681565b60405161ffff9091168152602001610200565b61026261048e366004611e9d565b61175c565b6104c06104a1366004611f75565b60086020525f908152604090205461ffff808216916201000090041682565b6040805161ffff938416815292909116602083015201610200565b60408051602080820187905273ffffffffffffffffffffffffffffffffffffffff808716838501528516606083015260808083018590528351808403909101815260a090920190925280519101205f90610557907f000000000000000000000000000000000000000000000000000000000000000090306118b8565b95945050505050565b5f8135610599576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff1633148015906105e6575081355f9081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b1561061d576040517f164c83eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61062e6040840160208501611e9d565b73ffffffffffffffffffffffffffffffffffffffff160361067b576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075f61068e6060850160408601611e9d565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff166106ed576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055f6107006080850160608601611e9d565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff1661075f576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107886107736060850160408601611e9d565b6107836080860160608701611e9d565b611972565b90506107968360a001611a58565b5f6107a96101c085016101a08601611f2e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000161ffff8216016107e3575060095461ffff16610823565b61271061ffff82161115610823576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61089f85356108396060880160408901611e9d565b6108496080890160608a01611e9d565b6040805160208082019590955273ffffffffffffffffffffffffffffffffffffffff938416818301529190921660608201526080808a0135828201528251808303909101815260a0909101909152805191012090565b90506108cb7f000000000000000000000000000000000000000000000000000000000000000082611c5f565b73ffffffffffffffffffffffffffffffffffffffff81165f908152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055935061092a6080860160608701611e9d565b73ffffffffffffffffffffffffffffffffffffffff9081169086359086167f538c3621a2292bd29880e1a10edb2e05c5d78f2631535a5b26fea5cfa5d8a52361097960608a0160408b01611e9d565b8761098a60408c0160208d01611e9d565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152928416602084015292168183015261ffff8816606082015260808b8101359082015260a0810187905290519081900360c00190a473ffffffffffffffffffffffffffffffffffffffff8416630f2da77684610a096080890160608a01611e9d565b610a1960608a0160408b01611e9d565b610a2960408b0160208c01611e9d565b8760a08c01610a3c6101c08e018e611f8e565b6040518963ffffffff1660e01b8152600401610a5f98979695949392919061203d565b5f604051808303815f87803b158015610a76575f5ffd5b505af1158015610a88573d5f5f3e3d5ffd5b50505050505050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610ae4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b31576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c0b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610c5a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610cd4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d21576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f7975b7b666747c0c864931c51b88cf8c4fe1fb5d993612cfb84524fbf166bdf2905f90a250565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610ddf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e2c576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015610e3b57506017823b11155b15610e72576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526007602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b9101610baf565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610f44576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610f91576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610baf565b60015473ffffffffffffffffffffffffffffffffffffffff16338114611084576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611166576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff16118061118b575061118083611c72565b61ffff168161ffff16115b156111c2576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060085f8560038111156111f4576111f4612147565b600381111561120557611205612147565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090941692169190911791909117905582600381111561126b5761126b612147565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146112fe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff8216111561133e576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600980547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60035473ffffffffffffffffffffffffffffffffffffffff1633146113f6576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161142d576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917f3def9dd5d6064865cf41d6faa1357fba7e4c253bd4245a5eaca3c4a473fa5f1e9190a35050565b60025473ffffffffffffffffffffffffffffffffffffffff1633146114fb576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146115ab576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166115f8576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610baf565b60025473ffffffffffffffffffffffffffffffffffffffff1633146116ea576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea090602001611551565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146117ac576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166117f9576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611848576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f360609081527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c83527660195155f3363d3d373d3d363d602036600436635c60da60205273ffffffffffffffffffffffffffffffffffffffff86167c60523d8160223d39730000000000000000000000000000000000000000176009526074600c20919092525f91829052610557818585611ccb565b6040517fae1c160c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063ae1c160c90602401602060405180830381865afa1580156119df573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a039190612174565b905073ffffffffffffffffffffffffffffffffffffffff8116611a52576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b92915050565b5f5b600360ff821611611c5b57816080018160ff1660048110611a7d57611a7d61218f565b602002016020810190611a9091906121bc565b611afc578160ff821660048110611aa957611aa961218f565b602002016020810190611abc9190611f2e565b61ffff1615611af7576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c4b565b5f8260ff831660048110611b1257611b1261218f565b602002016020810190611b259190611f2e565b9050611b448260ff166003811115611b3f57611b3f612147565b611c72565b61ffff168161ffff161115611b85576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60085f8460ff166003811115611b9e57611b9e612147565b6003811115611baf57611baf612147565b6003811115611bc057611bc0612147565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611c115750806020015161ffff168261ffff16115b15611c48576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b611c54816121d5565b9050611a5a565b5050565b5f611c6b5f8484611cea565b9392505050565b6040805160808101825261138881526103e860208201526107d091810182905260608101919091525f9080836003811115611caf57611caf612147565b60048110611cbf57611cbf61218f565b60200201519392505050565b5f60ff5f5350603592835260601b60015260155260555f908120915290565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f36060527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c9091527660195155f3363d3d373d3d363d602036600436635c60da6020527c60523d8160223d3973000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8416176009525f90826074600c87f5915081611da75763301164255f526004601cfd5b6040525f6060529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611dd6575f5ffd5b50565b5f5f5f5f60808587031215611dec575f5ffd5b843593506020850135611dfe81611db5565b92506040850135611e0e81611db5565b9396929550929360600135925050565b5f60208284031215611e2e575f5ffd5b813567ffffffffffffffff811115611e44575f5ffd5b82016101e08185031215611c6b575f5ffd5b80358015158114611e65575f5ffd5b919050565b5f5f60408385031215611e7b575f5ffd5b8235611e8681611db5565b9150611e9460208401611e56565b90509250929050565b5f60208284031215611ead575f5ffd5b8135611c6b81611db5565b803560048110611e65575f5ffd5b803561ffff81168114611e65575f5ffd5b5f5f5f60608486031215611ee9575f5ffd5b611ef284611eb8565b9250611f0060208501611ec6565b9150611f0e60408501611ec6565b90509250925092565b5f60208284031215611f27575f5ffd5b5035919050565b5f60208284031215611f3e575f5ffd5b611c6b82611ec6565b5f5f60408385031215611f58575f5ffd5b823591506020830135611f6a81611db5565b809150509250929050565b5f60208284031215611f85575f5ffd5b611c6b82611eb8565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fc1575f5ffd5b83018035915067ffffffffffffffff821115611fdb575f5ffd5b602001915036819003821315611fef575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff8716604082015273ffffffffffffffffffffffffffffffffffffffff8616606082015261ffff851660808201525f60a08201855f5b60048110156120e75761ffff6120d183611ec6565b16835260209283019291909101906001016120bc565b5050506101208201608086015f5b600481101561211e5761210782611e56565b1515835260209283019291909101906001016120f5565b5050506101c06101a08301526121396101c083018486611ff6565b9a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f60208284031215612184575f5ffd5b8151611c6b81611db5565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156121cc575f5ffd5b611c6b82611e56565b5f60ff821660ff810361220f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b6001019291505056fea264697066735822122092b5ba2a6f03d0311d7f0d95ad45663a96d1f2efc9a569b48ce174128ad3e9a764736f6c634300081d0033";
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
        readonly name: "DisabledFeeMustBeZero";
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
