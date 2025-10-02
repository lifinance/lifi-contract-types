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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516120ea3803806120ea833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b60805161206c61007e5f395f6108e9015261206c5ff3fe608060405260043610610028575f3560e01c806321a3af521461002c57806364261d5814610041575b5f5ffd5b61003f61003a366004611bb7565b610054565b005b61003f61004f366004611c7d565b610332565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611ce2565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808a01518a905f9073ffffffffffffffffffffffffffffffffffffffff1615610286576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b610539808260e00151146102c7576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102d18d8d6105f9565b6102db8e8c61068f565b6102ef8e5f01518f60c001518f8f33610973565b60c08f01526102fe8e8c610ab5565b505050505050505f47905081811115610325576103255f846103208585611ce2565b610c5e565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ad576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103bd3447611ce2565b9050846103e28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610419576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610456576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610493576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104d1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561050f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015188905f9073ffffffffffffffffffffffffffffffffffffffff1615610565576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610539808260e00151146105a6576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b08c8c61068f565b6105c28c608001518d60c00151610c93565b6105cc8c8c610ab5565b505050505050505f479050818111156105ee576105ee5f846103208585611ce2565b50505f909155505050565b6106558282610609600182611ce2565b81811061061857610618611d1a565b905060200281019061062a9190611d47565b61063b906080810190606001611d83565b73ffffffffffffffffffffffffffffffffffffffff161590565b61068b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b815160c08301515f917f0f323247869e99767f8ae64818f8e3049ae421f0e0fc249a40a1179278dc1648916106c76020860186611d83565b60e0808801516080808a015160408051602081019990995288810197909752606088019590955273ffffffffffffffffffffffffffffffffffffffff938416908701524660a087015260c0860152911690830152830135610100820152610120016040516020818303038152906040528051906020012090505f610844604080518082018252601081527f4c492e464920556e69742046616365740000000000000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527ff0a02c1921521518850ca78482536905d1a21c781491272fbe7c7d3021953493818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526022810191909152604281018390526062016040516020818303038152906040528051906020012090505f6108e5828580602001906108ac9190611da3565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610d4392505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461096c576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b5f828082036109ae576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109bc600185611ce2565b8181106109cb576109cb611d1a565b90506020028101906109dd9190611d47565b6109ee906080810190606001611d83565b90505f6109fa82610de7565b905073ffffffffffffffffffffffffffffffffffffffff8216610a2457610a213482611ce2565b90505b5f610a2f8888610e31565b9050610a3b8888610f3b565b610a488a89898985610fa7565b5f82610a5385610de7565b610a5d9190611ce2565b905089811015610aa7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b46600103610b075766b1a2bc2ec500008260c001511015610b02576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b56565b4661261103610b565767d02ab486cedc00008260c001511015610b56576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b636020820182611d83565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614610bcb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060400135421115610c09576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c23610c196020830183611d83565b8360c0015161114f565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610c529190611e57565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610c8857610c83828261114f565b505050565b610c838383836111bc565b805f03610ccc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d21578034101561068b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068b73ffffffffffffffffffffffffffffffffffffffff831633308461122a565b604051600190835f5260208301516040526040835103610d9757604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610dbb565b6041835103610db75760608301515f1a6020526040830151606052610dbb565b5f91505b6020600160805f855afa5191503d610dda57638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e2957610e2473ffffffffffffffffffffffffffffffffffffffff831630611282565b610e2b565b475b92915050565b6060815f8167ffffffffffffffff811115610e4e57610e4e611982565b604051908082528060200260200182016040528015610e77578160200160208202803683370190505b5090505f5f5b83811015610f3057868682818110610e9757610e97611d1a565b9050602002810190610ea99190611d47565b610eba906080810190606001611d83565b9150610ec582610de7565b838281518110610ed757610ed7611d1a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f285734838281518110610f1057610f10611d1a565b60200260200101818151610f249190611ce2565b9052505b600101610e7d565b509095945050505050565b5f5b81811015610c835736838383818110610f5857610f58611d1a565b9050602002810190610f6a9190611d47565b9050610f7c60e0820160c08301611f6a565b15610f9e57610f9e610f946060830160408401611d83565b8260800135610c93565b50600101610f3d565b83838383825f5b8181101561113557368a8a83818110610fc957610fc9611d1a565b9050602002810190610fdb9190611d47565b9050610ff061063b6060830160408401611d83565b8061105257506110526110096040830160208401611d83565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561106957506110696110096020830183611d83565b80156110ec57506110ec61108060a0830183611da3565b61108e916004915f91611f83565b61109791611faa565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611122576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61112c8c826112b5565b50600101610fae565b5050611144848484845f611528565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661119c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068b73ffffffffffffffffffffffffffffffffffffffff83168261173f565b73ffffffffffffffffffffffffffffffffffffffff8216611209576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c8373ffffffffffffffffffffffffffffffffffffffff84168383611758565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661127557637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112cd6112c56020830183611d83565b6017903b1190565b611303576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611342576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61135661063b6060850160408601611d83565b611360575f611366565b82608001355b90505f61138161137c6080860160608701611d83565b610de7565b9050815f036113b7576113b761139d6060860160408701611d83565b6113ad6040870160208801611d83565b86608001356117a1565b5f806113c66020870187611d83565b73ffffffffffffffffffffffffffffffffffffffff16846113ea60a0890189611da3565b6040516113f8929190612010565b5f6040518083038185875af1925050503d805f8114611432576040519150601f19603f3d011682016040523d82523d5f602084013e611437565b606091505b50915091508161144a5761144a816117cd565b5f61145e61137c6080890160608a01611d83565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861148f60208a018a611d83565b61149f60608b0160408c01611d83565b6114af60808c0160608d01611d83565b8b608001358987116114c157866114cb565b6114cb8a88611ce2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611537600182611ce2565b81811061154657611546611d1a565b90506020028101906115589190611d47565b611569906080810190606001611d83565b90505f5f5f5f5f5f5f5b8881101561172f5761158660018a611ce2565b81108015611595575088600114155b15611670578d8d828181106115ac576115ac611d1a565b90506020028101906115be9190611d47565b6115cf906080810190606001611d83565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611670578a818151811061161657611616611d1a565b602002602001015161162787610de7565b6116319190611ce2565b965073ffffffffffffffffffffffffffffffffffffffff861615611655575f611657565b895b93508387111561167057611670868d610320878b611ce2565b8d8d8281811061168257611682611d1a565b90506020028101906116949190611d47565b6116a5906060810190604001611d83565b94506116b085610de7565b925073ffffffffffffffffffffffffffffffffffffffff8516156116d4575f6116d6565b895b9150818311801561171357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561172757611727858d6103208587611ce2565b600101611573565b5050505050505050505050505050565b5f385f3884865af161068b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611798576390b8ec185f526004601cfd5b5f603452505050565b610c838383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117d7565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156118fe5773ffffffffffffffffffffffffffffffffffffffff8316611840576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156118b3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118d7919061201f565b10156118fe576118fe73ffffffffffffffffffffffffffffffffffffffff85168483611904565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611798575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661179857633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156119d3576119d3611982565b60405290565b5f82601f8301126119e8575f5ffd5b813567ffffffffffffffff811115611a0257611a02611982565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611a4f57611a4f611982565b604052818152838201602001851015611a66575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611aa5575f5ffd5b919050565b80358015158114611aa5575f5ffd5b5f6101408284031215611aca575f5ffd5b611ad26119af565b823581529050602082013567ffffffffffffffff811115611af1575f5ffd5b611afd848285016119d9565b602083015250604082013567ffffffffffffffff811115611b1c575f5ffd5b611b28848285016119d9565b604083015250611b3a60608301611a82565b6060820152611b4b60808301611a82565b6080820152611b5c60a08301611a82565b60a082015260c0828101359082015260e08083013590820152611b826101008301611aaa565b610100820152611b956101208301611aaa565b61012082015292915050565b5f60608284031215611bb1575f5ffd5b50919050565b5f5f5f5f60608587031215611bca575f5ffd5b843567ffffffffffffffff811115611be0575f5ffd5b611bec87828801611ab9565b945050602085013567ffffffffffffffff811115611c08575f5ffd5b8501601f81018713611c18575f5ffd5b803567ffffffffffffffff811115611c2e575f5ffd5b8760208260051b8401011115611c42575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c65575f5ffd5b611c7187828801611ba1565b91505092959194509250565b5f5f60408385031215611c8e575f5ffd5b823567ffffffffffffffff811115611ca4575f5ffd5b611cb085828601611ab9565b925050602083013567ffffffffffffffff811115611ccc575f5ffd5b611cd885828601611ba1565b9150509250929050565b81810381811115610e2b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d79575f5ffd5b9190910192915050565b5f60208284031215611d93575f5ffd5b611d9c82611a82565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dd6575f5ffd5b83018035915067ffffffffffffffff821115611df0575f5ffd5b602001915036819003821315611e04575f5ffd5b9250929050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611e7e610160840182611e0b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611eb98282611e0b565b9150506060840151611ee3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f5261012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611f7a575f5ffd5b611d9c82611aaa565b5f5f85851115611f91575f5ffd5b83861115611f9d575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612009577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561202f575f5ffd5b505191905056fea2646970667358221220067ff8ecbf7c4c28476d1cf6a8bede2f45d253f0fb03d0b1fcf6eb36a32fc70164736f6c634300081d0033";
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
        readonly name: "InvalidCallData";
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
