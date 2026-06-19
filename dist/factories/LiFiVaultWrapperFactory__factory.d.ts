import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiVaultWrapperFactory, LiFiVaultWrapperFactoryInterface } from "../LiFiVaultWrapperFactory";
type LiFiVaultWrapperFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiVaultWrapperFactory__factory extends ContractFactory {
    constructor(...args: LiFiVaultWrapperFactoryConstructorParams);
    deploy(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiVaultWrapperFactory>;
    getDeployTransaction(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiVaultWrapperFactory;
    connect(signer: Signer): LiFiVaultWrapperFactory__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161228038038061228083398101604081905261002e91610130565b5f80546001600160a01b0319166001600160a01b03858116919091179091558416158061006257506001600160a01b038316155b8061007457506001600160a01b038216155b8061008657506001600160a01b038116155b156100a45760405163d92e233d60e01b815260040160405180910390fd5b836001600160a01b03163b5f036100ce576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03938416608052600280549285166001600160a01b03199384161790556003805491909416911617909155506008805461ffff1916611f40179055610181565b80516001600160a01b038116811461012b575f5ffd5b919050565b5f5f5f5f60808587031215610143575f5ffd5b61014c85610115565b935061015a60208601610115565b925061016860408601610115565b915061017660608601610115565b905092959194509250565b6080516120d96101a75f395f8181610293015281816104e8015261085d01526120d95ff3fe608060405234801561000f575f5ffd5b50600436106101a5575f3560e01c80638da5cb5b116100e8578063dab297c311610093578063f12d54d81161006e578063f12d54d81461040e578063f294e72b14610416578063f2fde38b14610437578063fec7e26f1461044a575f5ffd5b8063dab297c3146103bb578063e30c3978146103ce578063f0882a02146103ee575f5ffd5b8063c3122044116100c3578063c31220441461038d578063c983fab3146103a0578063ce190578146103b3575f5ffd5b80638da5cb5b146103175780638e640ae4146103365780639a07d5cf1461036b575f5ffd5b80633e70838b1161015357806361a552dc1161012e57806361a552dc146102b55780636b44e6be146102da5780637200b829146102fc5780637b0e24e114610304575f5ffd5b80633e70838b14610249578063431a20ae1461025c57806349493a4d1461028e575f5ffd5b806319ac97361161018357806319ac97361461021957806323452b9c1461022e5780633d312f6d14610236575f5ffd5b8063065b3adf146101a95780630bae1c8a146101f357806310ef438714610206575b5f5ffd5b6002546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6101c9610201366004611ca7565b610492565b6101c9610214366004611cec565b610517565b61022c610227366004611d38565b610a4b565b005b61022c610b72565b61022c610244366004611d38565b610c3b565b61022c610257366004611d6b565b610db3565b61027e61026a366004611d6b565b60066020525f908152604090205460ff1681565b60405190151581526020016101ea565b6101c97f000000000000000000000000000000000000000000000000000000000000000081565b60035461027e9074010000000000000000000000000000000000000000900460ff1681565b61027e6102e8366004611d6b565b60096020525f908152604090205460ff1681565b61022c610ef1565b61022c610312366004611da5565b610fd5565b5f546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6101c9610344366004611de5565b60056020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61027e610379366004611d6b565b60046020525f908152604090205460ff1681565b61022c61039b366004611dfc565b61116d565b61022c6103ae366004611e15565b611264565b61022c611369565b61022c6103c9366004611d6b565b61141a565b6001546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b61022c611558565b6008546104249061ffff1681565b60405161ffff90911681526020016101ea565b61022c610445366004611d6b565b61161b565b610477610458366004611e43565b60076020525f908152604090205461ffff808216916201000090041682565b6040805161ffff9384168152929091166020830152016101ea565b60408051602080820187905273ffffffffffffffffffffffffffffffffffffffff808716838501528516606083015260808083018590528351808403909101815260a090920190925280519101205f9061050e907f00000000000000000000000000000000000000000000000000000000000000009030611777565b95945050505050565b5f8135610550576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff16331480159061059d575081355f9081526005602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b156105d4576040517f164c83eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105e56040840160208501611d6b565b73ffffffffffffffffffffffffffffffffffffffff1603610632576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065f6106456060850160408601611d6b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff166106a4576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045f6106b76080850160608601611d6b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610716576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61073f61072a6060850160408601611d6b565b61073a6080860160608701611d6b565b611831565b905061074d8360a001611917565b5f6107606101c085016101a08601611dfc565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000161ffff82160161079a575060085461ffff166107da565b61271061ffff821611156107da576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61085685356107f06060880160408901611d6b565b6108006080890160608a01611d6b565b6040805160208082019590955273ffffffffffffffffffffffffffffffffffffffff938416818301529190921660608201526080808a0135828201528251808303909101815260a0909101909152805191012090565b90506108827f000000000000000000000000000000000000000000000000000000000000000082611b17565b73ffffffffffffffffffffffffffffffffffffffff81165f90815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905593506108e16080860160608701611d6b565b73ffffffffffffffffffffffffffffffffffffffff9081169086359086167f538c3621a2292bd29880e1a10edb2e05c5d78f2631535a5b26fea5cfa5d8a52361093060608a0160408b01611d6b565b8761094160408c0160208d01611d6b565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152928416602084015292168183015261ffff8816606082015260808b8101359082015260a0810187905290519081900360c00190a473ffffffffffffffffffffffffffffffffffffffff8416630f2da776846109c06080890160608a01611d6b565b6109d060608a0160408b01611d6b565b6109e060408b0160208c01611d6b565b8760a08c016109f36101c08e018e611e5c565b6040518963ffffffff1660e01b8152600401610a16989796959493929190611f0b565b5f604051808303815f87803b158015610a2d575f5ffd5b505af1158015610a3f573d5f5f3e3d5ffd5b50505050505050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610a9b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ae8576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610bc2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610c11576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c8b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cd8576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015610cfa575073ffffffffffffffffffffffffffffffffffffffff82163b155b15610d31576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b9101610b66565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610e03576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610e50576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610b66565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610f43576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611025576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff16118061104a575061103f83611b2a565b61ffff168161ffff16115b15611081576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060075f8560038111156110b3576110b3612015565b60038111156110c4576110c4612015565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090941692169190911791909117905582600381111561112a5761112a612015565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146111bd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff821611156111fd576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60035473ffffffffffffffffffffffffffffffffffffffff1633146112b5576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816112ec576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917f3def9dd5d6064865cf41d6faa1357fba7e4c253bd4245a5eaca3c4a473fa5f1e9190a35050565b60025473ffffffffffffffffffffffffffffffffffffffff1633146113ba576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461146a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166114b7576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610b66565b60025473ffffffffffffffffffffffffffffffffffffffff1633146115a9576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea090602001611410565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461166b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166116b8576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611707576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f360609081527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c83527660195155f3363d3d373d3d363d602036600436635c60da60205273ffffffffffffffffffffffffffffffffffffffff86167c60523d8160223d39730000000000000000000000000000000000000000176009526074600c20919092525f9182905261050e818585611b99565b6040517fae1c160c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063ae1c160c90602401602060405180830381865afa15801561189e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118c29190612042565b905073ffffffffffffffffffffffffffffffffffffffff8116611911576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b92915050565b5f5b60048160ff161015611b1357816080018160ff166004811061193d5761193d61205d565b602002016020810190611950919061208a565b6119bc578160ff8216600481106119695761196961205d565b60200201602081019061197c9190611dfc565b61ffff16156119b7576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b0b565b5f8260ff8316600481106119d2576119d261205d565b6020020160208101906119e59190611dfc565b9050611a048260ff1660038111156119ff576119ff612015565b611b2a565b61ffff168161ffff161115611a45576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60075f8460ff166003811115611a5e57611a5e612015565b6003811115611a6f57611a6f612015565b6003811115611a8057611a80612015565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611ad15750806020015161ffff168261ffff16115b15611b08576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b600101611919565b5050565b5f611b235f8484611bb8565b9392505050565b5f80826003811115611b3e57611b3e612015565b03611b4c5750611388919050565b6001826003811115611b6057611b60612015565b03611b6e57506103e8919050565b6002826003811115611b8257611b82612015565b03611b9057506107d0919050565b506107d0919050565b5f60ff5f5350603592835260601b60015260155260555f908120915290565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f36060527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c9091527660195155f3363d3d373d3d363d602036600436635c60da6020527c60523d8160223d3973000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8416176009525f90826074600c87f5915081611c755763301164255f526004601cfd5b6040525f6060529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611ca4575f5ffd5b50565b5f5f5f5f60808587031215611cba575f5ffd5b843593506020850135611ccc81611c83565b92506040850135611cdc81611c83565b9396929550929360600135925050565b5f60208284031215611cfc575f5ffd5b813567ffffffffffffffff811115611d12575f5ffd5b82016101e08185031215611b23575f5ffd5b80358015158114611d33575f5ffd5b919050565b5f5f60408385031215611d49575f5ffd5b8235611d5481611c83565b9150611d6260208401611d24565b90509250929050565b5f60208284031215611d7b575f5ffd5b8135611b2381611c83565b803560048110611d33575f5ffd5b803561ffff81168114611d33575f5ffd5b5f5f5f60608486031215611db7575f5ffd5b611dc084611d86565b9250611dce60208501611d94565b9150611ddc60408501611d94565b90509250925092565b5f60208284031215611df5575f5ffd5b5035919050565b5f60208284031215611e0c575f5ffd5b611b2382611d94565b5f5f60408385031215611e26575f5ffd5b823591506020830135611e3881611c83565b809150509250929050565b5f60208284031215611e53575f5ffd5b611b2382611d86565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e8f575f5ffd5b83018035915067ffffffffffffffff821115611ea9575f5ffd5b602001915036819003821315611ebd575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff8716604082015273ffffffffffffffffffffffffffffffffffffffff8616606082015261ffff851660808201525f60a08201855f5b6004811015611fb55761ffff611f9f83611d94565b1683526020928301929190910190600101611f8a565b5050506101208201608086015f5b6004811015611fec57611fd582611d24565b151583526020928301929190910190600101611fc3565b5050506101c06101a08301526120076101c083018486611ec4565b9a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f60208284031215612052575f5ffd5b8151611b2381611c83565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020828403121561209a575f5ffd5b611b2382611d2456fea2646970667358221220db5af8a4321d9ea5e3f943d7349fc6a3ee7e82ebebd1d9d8ddcfbb7049ac2c4264736f6c634300081d0033";
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
