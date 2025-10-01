import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UnitFacet, UnitFacetInterface } from "../UnitFacet";
type UnitFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UnitFacet__factory extends ContractFactory {
    constructor(...args: UnitFacetConstructorParams);
    deploy(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UnitFacet>;
    getDeployTransaction(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UnitFacet;
    connect(signer: Signer): UnitFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516123bc3803806123bc833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b60805161233e61007e5f395f61090d015261233e5ff3fe608060405260043610610028575f3560e01c806321a3af521461002c57806364261d5814610041575b5f5ffd5b61003f61003a366004611e77565b610054565b005b61003f61004f366004611f3d565b610328565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611fa2565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808a01518a905f9073ffffffffffffffffffffffffffffffffffffffff1615610286576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6103e7808260e00151146102c7576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102d18e8c6105ef565b6102e58e5f01518f60c001518f8f33610997565b60c08f01526102f48e8c610ad9565b505050505050505f4790508181111561031b5761031b5f846103168585611fa2565b610c82565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103a3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103b33447611fa2565b9050846103d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561040f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361044c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610489576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610505576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015188905f9073ffffffffffffffffffffffffffffffffffffffff161561055b576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896103e7808260e001511461059c576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a68c8c6105ef565b6105b88c608001518d60c00151610cb7565b6105c28c8c610ad9565b505050505050505f479050818111156105e4576105e45f846103168585611fa2565b50505f909155505050565b61062d6040518060400160405280601381526020017f766572696679696e67207369676e617475726500000000000000000000000000815250610d6b565b6106567f0f323247869e99767f8ae64818f8e3049ae421f0e0fc249a40a1179278dc1648610dfd565b815161066190610dfd565b61066e8260c00151610e8e565b61068361067e6020830183611fda565b610f1f565b61068c46610e8e565b6106998260e00151610e8e565b6106a68260800151610f1f565b6106b38160400135610e8e565b815160c08301515f917f0f323247869e99767f8ae64818f8e3049ae421f0e0fc249a40a1179278dc1648916106eb6020860186611fda565b60e0808801516080808a015160408051602081019990995288810197909752606088019590955273ffffffffffffffffffffffffffffffffffffffff938416908701524660a087015260c0860152911690830152830135610100820152610120016040516020818303038152906040528051906020012090505f610868604080518082018252601081527f4c492e464920556e69742046616365740000000000000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527ff0a02c1921521518850ca78482536905d1a21c781491272fbe7c7d3021953493818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526022810191909152604281018390526062016040516020818303038152906040528051906020012090505f610909828580602001906108d09190611ffa565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610fc092505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610990576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b5f828082036109d2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109e0600185611fa2565b8181106109ef576109ef612062565b9050602002810190610a01919061208f565b610a12906080810190606001611fda565b90505f610a1e82611064565b905073ffffffffffffffffffffffffffffffffffffffff8216610a4857610a453482611fa2565b90505b5f610a5388886110ae565b9050610a5f88886111b8565b610a6c8a89898985611224565b5f82610a7785611064565b610a819190611fa2565b905089811015610acb576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b46600103610b2b5766b1a2bc2ec500008260c001511015610b26576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b7a565b4661261103610b7a5767d02ab486cedc00008260c001511015610b7a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b876020820182611fda565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614610bef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060400135421115610c2d576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c47610c3d6020830183611fda565b8360c001516113e6565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610c769190612117565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610cac57610ca782826113e6565b505050565b610ca7838383611453565b805f03610cf0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d495780341015610d45576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d4573ffffffffffffffffffffffffffffffffffffffff83163330846114c1565b610dfa81604051602401610d7f919061222a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052611519565b50565b610dfa81604051602401610e1391815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f27b7cf8500000000000000000000000000000000000000000000000000000000179052611519565b610dfa81604051602401610ea491815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff82c50f100000000000000000000000000000000000000000000000000000000179052611519565b60405173ffffffffffffffffffffffffffffffffffffffff82166024820152610dfa90604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f2c2ecbc200000000000000000000000000000000000000000000000000000000179052611519565b604051600190835f526020830151604052604083510361101457604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052611038565b60418351036110345760608301515f1a6020526040830151606052611038565b5f91505b6020600160805f855afa5191503d61105757638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110a6576110a173ffffffffffffffffffffffffffffffffffffffff831630611522565b6110a8565b475b92915050565b6060815f8167ffffffffffffffff8111156110cb576110cb611c42565b6040519080825280602002602001820160405280156110f4578160200160208202803683370190505b5090505f5f5b838110156111ad5786868281811061111457611114612062565b9050602002810190611126919061208f565b611137906080810190606001611fda565b915061114282611064565b83828151811061115457611154612062565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111a5573483828151811061118d5761118d612062565b602002602001018181516111a19190611fa2565b9052505b6001016110fa565b509095945050505050565b5f5b81811015610ca757368383838181106111d5576111d5612062565b90506020028101906111e7919061208f565b90506111f960e0820160c0830161223c565b1561121b5761121b6112116060830160408401611fda565b8260800135610cb7565b506001016111ba565b83838383825f5b818110156113cc57368a8a8381811061124657611246612062565b9050602002810190611258919061208f565b905061128761126d6060830160408401611fda565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112e957506112e96112a06040830160208401611fda565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561130057506113006112a06020830183611fda565b8015611383575061138361131760a0830183611ffa565b611325916004915f91612255565b61132e9161227c565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113b9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113c38c82611555565b5060010161122b565b50506113db848484845f6117c8565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611433576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d4573ffffffffffffffffffffffffffffffffffffffff8316826119df565b73ffffffffffffffffffffffffffffffffffffffff82166114a0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ca773ffffffffffffffffffffffffffffffffffffffff841683836119f8565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661150c57637939f4245f526004601cfd5b5f60605260405250505050565b610dfa81611a41565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61156d6115656020830183611fda565b6017903b1190565b6115a3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115e2576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115f661126d6060850160408601611fda565b611600575f611606565b82608001355b90505f61162161161c6080860160608701611fda565b611064565b9050815f036116575761165761163d6060860160408701611fda565b61164d6040870160208801611fda565b8660800135611a61565b5f806116666020870187611fda565b73ffffffffffffffffffffffffffffffffffffffff168461168a60a0890189611ffa565b6040516116989291906122e2565b5f6040518083038185875af1925050503d805f81146116d2576040519150601f19603f3d011682016040523d82523d5f602084013e6116d7565b606091505b5091509150816116ea576116ea81611a8d565b5f6116fe61161c6080890160608a01611fda565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861172f60208a018a611fda565b61173f60608b0160408c01611fda565b61174f60808c0160608d01611fda565b8b60800135898711611761578661176b565b61176b8a88611fa2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117d7600182611fa2565b8181106117e6576117e6612062565b90506020028101906117f8919061208f565b611809906080810190606001611fda565b90505f5f5f5f5f5f5f5b888110156119cf5761182660018a611fa2565b81108015611835575088600114155b15611910578d8d8281811061184c5761184c612062565b905060200281019061185e919061208f565b61186f906080810190606001611fda565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611910578a81815181106118b6576118b6612062565b60200260200101516118c787611064565b6118d19190611fa2565b965073ffffffffffffffffffffffffffffffffffffffff8616156118f5575f6118f7565b895b93508387111561191057611910868d610316878b611fa2565b8d8d8281811061192257611922612062565b9050602002810190611934919061208f565b611945906060810190604001611fda565b945061195085611064565b925073ffffffffffffffffffffffffffffffffffffffff851615611974575f611976565b895b915081831180156119b357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119c7576119c7858d6103168587611fa2565b600101611813565b5050505050505050505050505050565b5f385f3884865af1610d455763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a38576390b8ec185f526004601cfd5b5f603452505050565b80516a636f6e736f6c652e6c6f67602083015f808483855afa5050505050565b610ca78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a97565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611bbe5773ffffffffffffffffffffffffffffffffffffffff8316611b00576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b73573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b9791906122f1565b1015611bbe57611bbe73ffffffffffffffffffffffffffffffffffffffff85168483611bc4565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a38575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a3857633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c9357611c93611c42565b60405290565b5f82601f830112611ca8575f5ffd5b813567ffffffffffffffff811115611cc257611cc2611c42565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d0f57611d0f611c42565b604052818152838201602001851015611d26575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d65575f5ffd5b919050565b80358015158114611d65575f5ffd5b5f6101408284031215611d8a575f5ffd5b611d92611c6f565b823581529050602082013567ffffffffffffffff811115611db1575f5ffd5b611dbd84828501611c99565b602083015250604082013567ffffffffffffffff811115611ddc575f5ffd5b611de884828501611c99565b604083015250611dfa60608301611d42565b6060820152611e0b60808301611d42565b6080820152611e1c60a08301611d42565b60a082015260c0828101359082015260e08083013590820152611e426101008301611d6a565b610100820152611e556101208301611d6a565b61012082015292915050565b5f60608284031215611e71575f5ffd5b50919050565b5f5f5f5f60608587031215611e8a575f5ffd5b843567ffffffffffffffff811115611ea0575f5ffd5b611eac87828801611d79565b945050602085013567ffffffffffffffff811115611ec8575f5ffd5b8501601f81018713611ed8575f5ffd5b803567ffffffffffffffff811115611eee575f5ffd5b8760208260051b8401011115611f02575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611f25575f5ffd5b611f3187828801611e61565b91505092959194509250565b5f5f60408385031215611f4e575f5ffd5b823567ffffffffffffffff811115611f64575f5ffd5b611f7085828601611d79565b925050602083013567ffffffffffffffff811115611f8c575f5ffd5b611f9885828601611e61565b9150509250929050565b818103818111156110a8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611fea575f5ffd5b611ff382611d42565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261202d575f5ffd5b83018035915067ffffffffffffffff821115612047575f5ffd5b60200191503681900382131561205b575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120c1575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261213e6101608401826120cb565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261217982826120cb565b91505060608401516121a3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161221261012085018215159052565b50610120840151801515610140850152509392505050565b602081525f611ff360208301846120cb565b5f6020828403121561224c575f5ffd5b611ff382611d6a565b5f5f85851115612263575f5ffd5b8386111561226f575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156122db577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612301575f5ffd5b505191905056fea2646970667358221220006c80a24401ef6e85d75e1a3b249dce319ccf8b8b4145ea2d2958ee65f022fa64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaUnit";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
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
            readonly name: "_unitData";
            readonly type: "tuple";
            readonly internalType: "struct UnitFacet.UnitData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaUnit";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
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
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_unitData";
            readonly type: "tuple";
            readonly internalType: "struct UnitFacet.UnitData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SignatureExpired";
        readonly inputs: readonly [];
    }];
    static createInterface(): UnitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnitFacet;
}
export {};
