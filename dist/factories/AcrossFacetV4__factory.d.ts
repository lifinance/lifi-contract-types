import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV4, AcrossFacetV4Interface } from "../AcrossFacetV4";
type AcrossFacetV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV4;
    connect(signer: Signer): AcrossFacetV4__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161211b38038061211b83398101604081905261002e91610076565b6001600160a01b0382161580610042575080155b15610060576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0390911660805260a0526100ad565b5f5f60408385031215610087575f5ffd5b82516001600160a01b038116811461009d575f5ffd5b6020939093015192949293505050565b60805160a0516120336100e85f395f81816095015261089701525f818160f40152818161084d01528181610946015261097101526120335ff3fe608060405260043610610058575f3560e01c8063d999984d11610041578063d999984d14610084578063e796cd98146100ca578063f6503992146100e3575f5ffd5b80631794958f1461005c578063a1f1ce4314610071575b5f5ffd5b61006f61006a366004611994565b61013b565b005b61006f61007f366004611a5a565b61037f565b34801561008f575f5ffd5b506100b77f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100d5575f5ffd5b506100b7651f2abb7bf89b81565b3480156100ee575f5ffd5b506101167f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c1565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101c63447611aec565b905086806101000151610205576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102288160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561025f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361029c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102d9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ed895f01518a60c001518a8a33610568565b60c08a01525f6102fc87611b31565b9050670de0b6b3a764000061031760c0890160a08a01611bfb565b6fffffffffffffffffffffffffffffffff168b60c001516103389190611c1b565b6103429190611c32565b60808201526103518a826106aa565b504791505081811115610372576103725f8461036d8585611aec565b610a76565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61040a3447611aec565b90508461042f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610466576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104a3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104e0576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561051e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053087608001518860c00151610aab565b6105428761053d88611b31565b6106aa565b504790508181111561055d5761055d5f8461036d8585611aec565b50505f909155505050565b5f828082036105a3576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105b1600185611aec565b8181106105c0576105c0611c6a565b90506020028101906105d29190611c97565b6105e3906080810190606001611cd3565b90505f6105ef82610b5f565b905073ffffffffffffffffffffffffffffffffffffffff8216610619576106163482611aec565b90505b5f6106248888610ba9565b90506106308888610cb3565b61063d8a89898985610d1f565b5f8261064885610b5f565b6106529190611aec565b90508981101561069c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b610120820151610140820151511515901515146106f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107018360e00151610ee1565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036107c7578151610786576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a361082c565b8261012001511580156107f55750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b1561082c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff1661093c577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c001518460200151855f01517f000000000000000000000000000000000000000000000000000000000000000087606001518960c001518960800151898b60c001518c60e001518d61010001518e61012001518f61014001516040518e63ffffffff1660e01b81526004016109099c9b9a99989796959493929190611d38565b5f604051808303818588803b158015610920575f5ffd5b505af1158015610932573d5f5f3e3d5ffd5b5050505050610a3a565b61096f83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610f06565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68360200151845f0151856040015186606001518860c001518860800151888a60c001518b60e001518c61010001518d61012001518e61014001516040518d63ffffffff1660e01b8152600401610a0c9c9b9a99989796959493929190611d38565b5f604051808303815f87803b158015610a23575f5ffd5b505af1158015610a35573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610a699190611db6565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610aa057610a9b8282610f32565b505050565b610a9b838383610f9f565b805f03610ae4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b3d5780341015610b39576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610b3973ffffffffffffffffffffffffffffffffffffffff831633308461100d565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ba157610b9c73ffffffffffffffffffffffffffffffffffffffff831630611065565b610ba3565b475b92915050565b6060815f8167ffffffffffffffff811115610bc657610bc6611739565b604051908082528060200260200182016040528015610bef578160200160208202803683370190505b5090505f5f5b83811015610ca857868682818110610c0f57610c0f611c6a565b9050602002810190610c219190611c97565b610c32906080810190606001611cd3565b9150610c3d82610b5f565b838281518110610c4f57610c4f611c6a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ca05734838281518110610c8857610c88611c6a565b60200260200101818151610c9c9190611aec565b9052505b600101610bf5565b509095945050505050565b5f5b81811015610a9b5736838383818110610cd057610cd0611c6a565b9050602002810190610ce29190611c97565b9050610cf460e0820160c08301611ec9565b15610d1657610d16610d0c6060830160408401611cd3565b8260800135610aab565b50600101610cb5565b83838383825f5b81811015610ec757368a8a83818110610d4157610d41611c6a565b9050602002810190610d539190611c97565b9050610d82610d686060830160408401611cd3565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610de45750610de4610d9b6040830160208401611cd3565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dfb5750610dfb610d9b6020830183611cd3565b8015610e7e5750610e7e610e1260a0830183611ee2565b610e20916004915f91611f4a565b610e2991611f71565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610eb4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ebe8c82611098565b50600101610d26565b5050610ed6848484845f61130b565b505050505050505050565b5f660416edef1601be8203610efd5750651f2abb7bf89b919050565b5090565b919050565b610a9b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611522565b73ffffffffffffffffffffffffffffffffffffffff8216610f7f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3973ffffffffffffffffffffffffffffffffffffffff83168261164f565b73ffffffffffffffffffffffffffffffffffffffff8216610fec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9b73ffffffffffffffffffffffffffffffffffffffff84168383611668565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661105857637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110b06110a86020830183611cd3565b6017903b1190565b6110e6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611125576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611139610d686060850160408601611cd3565b611143575f611149565b82608001355b90505f61116461115f6080860160608701611cd3565b610b5f565b9050815f0361119a5761119a6111806060860160408701611cd3565b6111906040870160208801611cd3565b8660800135610f06565b5f806111a96020870187611cd3565b73ffffffffffffffffffffffffffffffffffffffff16846111cd60a0890189611ee2565b6040516111db929190611fd7565b5f6040518083038185875af1925050503d805f8114611215576040519150601f19603f3d011682016040523d82523d5f602084013e61121a565b606091505b50915091508161122d5761122d816116b1565b5f61124161115f6080890160608a01611cd3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861127260208a018a611cd3565b61128260608b0160408c01611cd3565b61129260808c0160608d01611cd3565b8b608001358987116112a457866112ae565b6112ae8a88611aec565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261131a600182611aec565b81811061132957611329611c6a565b905060200281019061133b9190611c97565b61134c906080810190606001611cd3565b90505f5f5f5f5f5f5f5b888110156115125761136960018a611aec565b81108015611378575088600114155b15611453578d8d8281811061138f5761138f611c6a565b90506020028101906113a19190611c97565b6113b2906080810190606001611cd3565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611453578a81815181106113f9576113f9611c6a565b602002602001015161140a87610b5f565b6114149190611aec565b965073ffffffffffffffffffffffffffffffffffffffff861615611438575f61143a565b895b93508387111561145357611453868d61036d878b611aec565b8d8d8281811061146557611465611c6a565b90506020028101906114779190611c97565b611488906060810190604001611cd3565b945061149385610b5f565b925073ffffffffffffffffffffffffffffffffffffffff8516156114b7575f6114b9565b895b915081831180156114f657508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561150a5761150a858d61036d8587611aec565b600101611356565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116495773ffffffffffffffffffffffffffffffffffffffff831661158b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156115fe573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116229190611fe6565b10156116495761164973ffffffffffffffffffffffffffffffffffffffff851684836116bb565b50505050565b5f385f3884865af1610b395763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166116a8576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166116a8575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166116a857633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561178a5761178a611739565b60405290565b604051610160810167ffffffffffffffff8111828210171561178a5761178a611739565b5f82601f8301126117c3575f5ffd5b8135602083015f5f67ffffffffffffffff8411156117e3576117e3611739565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff8211171561183057611830611739565b604052838152905080828401871015611847575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f01575f5ffd5b80358015158114610f01575f5ffd5b5f61014082840312156118a6575f5ffd5b6118ae611766565b823581529050602082013567ffffffffffffffff8111156118cd575f5ffd5b6118d9848285016117b4565b602083015250604082013567ffffffffffffffff8111156118f8575f5ffd5b611904848285016117b4565b60408301525061191660608301611863565b606082015261192760808301611863565b608082015261193860a08301611863565b60a082015260c0828101359082015260e0808301359082015261195e6101008301611886565b6101008201526119716101208301611886565b61012082015292915050565b5f610160828403121561198e575f5ffd5b50919050565b5f5f5f5f606085870312156119a7575f5ffd5b843567ffffffffffffffff8111156119bd575f5ffd5b6119c987828801611895565b945050602085013567ffffffffffffffff8111156119e5575f5ffd5b8501601f810187136119f5575f5ffd5b803567ffffffffffffffff811115611a0b575f5ffd5b8760208260051b8401011115611a1f575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611a42575f5ffd5b611a4e8782880161197d565b91505092959194509250565b5f5f60408385031215611a6b575f5ffd5b823567ffffffffffffffff811115611a81575f5ffd5b611a8d85828601611895565b925050602083013567ffffffffffffffff811115611aa9575f5ffd5b611ab58582860161197d565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610ba357610ba3611abf565b80356fffffffffffffffffffffffffffffffff81168114610f01575f5ffd5b803563ffffffff81168114610f01575f5ffd5b5f6101608236031215611b42575f5ffd5b611b4a611790565b8235815260208084013590820152604080840135908201526060808401359082015260808084013590820152611b8260a08401611aff565b60a082015260c08381013590820152611b9d60e08401611b1e565b60e0820152611baf6101008401611b1e565b610100820152611bc26101208401611b1e565b61012082015261014083013567ffffffffffffffff811115611be2575f5ffd5b611bee368286016117b4565b6101408301525092915050565b5f60208284031215611c0b575f5ffd5b611c1482611aff565b9392505050565b8082028115828204841417610ba357610ba3611abf565b5f82611c65577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611cc9575f5ffd5b9190910192915050565b5f60208284031215611ce3575f5ffd5b611c1482611863565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b8c81528b60208201528a60408201528960608201528860808201528760a08201528660c08201528560e082015263ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611da4610180830184611cec565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611ddd610160840182611cec565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611e188282611cec565b9150506060840151611e42608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611eb161012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611ed9575f5ffd5b611c1482611886565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f15575f5ffd5b83018035915067ffffffffffffffff821115611f2f575f5ffd5b602001915036819003821315611f43575f5ffd5b9250929050565b5f5f85851115611f58575f5ffd5b83861115611f64575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611fd0577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611ff6575f5ffd5b505191905056fea2646970667358221220c48356b4f9e85b90942693db21a7c336670b92b3d01f345e50773f6551ac4bd164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_CHAIN_ID_SOLANA";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV4";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
    }];
    static createInterface(): AcrossFacetV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV4;
}
export {};
