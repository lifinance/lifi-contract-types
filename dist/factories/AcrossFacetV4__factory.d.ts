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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516121b43803806121b483398101604081905261002e91610076565b6001600160a01b0382161580610042575080155b15610060576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0390911660805260a0526100ad565b5f5f60408385031215610087575f5ffd5b82516001600160a01b038116811461009d575f5ffd5b6020939093015192949293505050565b60805160a0516120cc6100e85f395f818160a0015261093001525f818160ff015281816108e6015281816109df0152610a0a01526120cc5ff3fe608060405260043610610063575f3560e01c8063e796cd9811610041578063e796cd98146100d5578063f6503992146100ee578063f97136af14610146575f5ffd5b80631794958f14610067578063a1f1ce431461007c578063d999984d1461008f575b5f5ffd5b61007a610075366004611a2d565b610161565b005b61007a61008a366004611af3565b6103a5565b34801561009a575f5ffd5b506100c27f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100e0575f5ffd5b506100c2651f2abb7bf89b81565b3480156100f9575f5ffd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100cc565b348015610151575f5ffd5b506100c2670de0b6b3a764000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101dc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101ec3447611b85565b90508680610100015161022b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761024e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610285576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036102c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102ff576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610313895f01518a60c001518a8a3361058e565b60c08a01525f61032287611bca565b9050670de0b6b3a764000061033d60c0890160a08a01611c94565b6fffffffffffffffffffffffffffffffff168b60c0015161035e9190611cb4565b6103689190611ccb565b60808201526103778a826106d0565b504791505081811115610398576103985f846103938585611b85565b610b0f565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610420576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104303447611b85565b9050846104558160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561048c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610506576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610544576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055687608001518860c00151610b44565b6105688761056388611bca565b6106d0565b5047905081811115610583576105835f846103938585611b85565b50505f909155505050565b5f828082036105c9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105d7600185611b85565b8181106105e6576105e6611d03565b90506020028101906105f89190611d30565b610609906080810190606001611d6c565b90505f61061582610bf8565b905073ffffffffffffffffffffffffffffffffffffffff821661063f5761063c3482611b85565b90505b5f61064a8888610c42565b90506106568888610d4c565b6106638a89898985610db8565b5f8261066e85610bf8565b6106789190611b85565b9050898110156106c2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61012082015161014082015151151590151514610719576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107278360e00151610f7a565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036107ed5781516107ac576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a361088a565b82610120015115801561081b5750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b15610852576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815161088a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208201516108c5576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff166109d5577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c001518460200151855f01517f000000000000000000000000000000000000000000000000000000000000000087606001518960c001518960800151898b60c001518c60e001518d61010001518e61012001518f61014001516040518e63ffffffff1660e01b81526004016109a29c9b9a99989796959493929190611dd1565b5f604051808303818588803b1580156109b9575f5ffd5b505af11580156109cb573d5f5f3e3d5ffd5b5050505050610ad3565b610a0883608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610f9f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68360200151845f0151856040015186606001518860c001518860800151888a60c001518b60e001518c61010001518d61012001518e61014001516040518d63ffffffff1660e01b8152600401610aa59c9b9a99989796959493929190611dd1565b5f604051808303815f87803b158015610abc575f5ffd5b505af1158015610ace573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b029190611e4f565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b3957610b348282610fcb565b505050565b610b34838383611038565b805f03610b7d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bd65780341015610bd2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bd273ffffffffffffffffffffffffffffffffffffffff83163330846110a6565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c3a57610c3573ffffffffffffffffffffffffffffffffffffffff8316306110fe565b610c3c565b475b92915050565b6060815f8167ffffffffffffffff811115610c5f57610c5f6117d2565b604051908082528060200260200182016040528015610c88578160200160208202803683370190505b5090505f5f5b83811015610d4157868682818110610ca857610ca8611d03565b9050602002810190610cba9190611d30565b610ccb906080810190606001611d6c565b9150610cd682610bf8565b838281518110610ce857610ce8611d03565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d395734838281518110610d2157610d21611d03565b60200260200101818151610d359190611b85565b9052505b600101610c8e565b509095945050505050565b5f5b81811015610b345736838383818110610d6957610d69611d03565b9050602002810190610d7b9190611d30565b9050610d8d60e0820160c08301611f62565b15610daf57610daf610da56060830160408401611d6c565b8260800135610b44565b50600101610d4e565b83838383825f5b81811015610f6057368a8a83818110610dda57610dda611d03565b9050602002810190610dec9190611d30565b9050610e1b610e016060830160408401611d6c565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e7d5750610e7d610e346040830160208401611d6c565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e945750610e94610e346020830183611d6c565b8015610f175750610f17610eab60a0830183611f7b565b610eb9916004915f91611fe3565b610ec29161200a565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f4d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f578c82611131565b50600101610dbf565b5050610f6f848484845f6113a4565b505050505050505050565b5f660416edef1601be8203610f965750651f2abb7bf89b919050565b5090565b919050565b610b348383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115bb565b73ffffffffffffffffffffffffffffffffffffffff8216611018576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bd273ffffffffffffffffffffffffffffffffffffffff8316826116e8565b73ffffffffffffffffffffffffffffffffffffffff8216611085576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3473ffffffffffffffffffffffffffffffffffffffff84168383611701565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166110f157637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111496111416020830183611d6c565b6017903b1190565b61117f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036111be576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6111d2610e016060850160408601611d6c565b6111dc575f6111e2565b82608001355b90505f6111fd6111f86080860160608701611d6c565b610bf8565b9050815f03611233576112336112196060860160408701611d6c565b6112296040870160208801611d6c565b8660800135610f9f565b5f806112426020870187611d6c565b73ffffffffffffffffffffffffffffffffffffffff168461126660a0890189611f7b565b604051611274929190612070565b5f6040518083038185875af1925050503d805f81146112ae576040519150601f19603f3d011682016040523d82523d5f602084013e6112b3565b606091505b5091509150816112c6576112c68161174a565b5f6112da6111f86080890160608a01611d6c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861130b60208a018a611d6c565b61131b60608b0160408c01611d6c565b61132b60808c0160608d01611d6c565b8b6080013589871161133d5786611347565b6113478a88611b85565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826113b3600182611b85565b8181106113c2576113c2611d03565b90506020028101906113d49190611d30565b6113e5906080810190606001611d6c565b90505f5f5f5f5f5f5f5b888110156115ab5761140260018a611b85565b81108015611411575088600114155b156114ec578d8d8281811061142857611428611d03565b905060200281019061143a9190611d30565b61144b906080810190606001611d6c565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146114ec578a818151811061149257611492611d03565b60200260200101516114a387610bf8565b6114ad9190611b85565b965073ffffffffffffffffffffffffffffffffffffffff8616156114d1575f6114d3565b895b9350838711156114ec576114ec868d610393878b611b85565b8d8d828181106114fe576114fe611d03565b90506020028101906115109190611d30565b611521906060810190604001611d6c565b945061152c85610bf8565b925073ffffffffffffffffffffffffffffffffffffffff851615611550575f611552565b895b9150818311801561158f57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156115a3576115a3858d6103938587611b85565b6001016113ef565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116e25773ffffffffffffffffffffffffffffffffffffffff8316611624576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611697573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116bb919061207f565b10156116e2576116e273ffffffffffffffffffffffffffffffffffffffff85168483611754565b50505050565b5f385f3884865af1610bd25763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611741576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611741575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661174157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611823576118236117d2565b60405290565b604051610160810167ffffffffffffffff81118282101715611823576118236117d2565b5f82601f83011261185c575f5ffd5b8135602083015f5f67ffffffffffffffff84111561187c5761187c6117d2565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff821117156118c9576118c96117d2565b6040528381529050808284018710156118e0575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f9a575f5ffd5b80358015158114610f9a575f5ffd5b5f610140828403121561193f575f5ffd5b6119476117ff565b823581529050602082013567ffffffffffffffff811115611966575f5ffd5b6119728482850161184d565b602083015250604082013567ffffffffffffffff811115611991575f5ffd5b61199d8482850161184d565b6040830152506119af606083016118fc565b60608201526119c0608083016118fc565b60808201526119d160a083016118fc565b60a082015260c0828101359082015260e080830135908201526119f7610100830161191f565b610100820152611a0a610120830161191f565b61012082015292915050565b5f6101608284031215611a27575f5ffd5b50919050565b5f5f5f5f60608587031215611a40575f5ffd5b843567ffffffffffffffff811115611a56575f5ffd5b611a628782880161192e565b945050602085013567ffffffffffffffff811115611a7e575f5ffd5b8501601f81018713611a8e575f5ffd5b803567ffffffffffffffff811115611aa4575f5ffd5b8760208260051b8401011115611ab8575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611adb575f5ffd5b611ae787828801611a16565b91505092959194509250565b5f5f60408385031215611b04575f5ffd5b823567ffffffffffffffff811115611b1a575f5ffd5b611b268582860161192e565b925050602083013567ffffffffffffffff811115611b42575f5ffd5b611b4e85828601611a16565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c3c57610c3c611b58565b80356fffffffffffffffffffffffffffffffff81168114610f9a575f5ffd5b803563ffffffff81168114610f9a575f5ffd5b5f6101608236031215611bdb575f5ffd5b611be3611829565b8235815260208084013590820152604080840135908201526060808401359082015260808084013590820152611c1b60a08401611b98565b60a082015260c08381013590820152611c3660e08401611bb7565b60e0820152611c486101008401611bb7565b610100820152611c5b6101208401611bb7565b61012082015261014083013567ffffffffffffffff811115611c7b575f5ffd5b611c873682860161184d565b6101408301525092915050565b5f60208284031215611ca4575f5ffd5b611cad82611b98565b9392505050565b8082028115828204841417610c3c57610c3c611b58565b5f82611cfe577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d62575f5ffd5b9190910192915050565b5f60208284031215611d7c575f5ffd5b611cad826118fc565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b8c81528b60208201528a60408201528960608201528860808201528760a08201528660c08201528560e082015263ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611e3d610180830184611d85565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611e76610160840182611d85565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611eb18282611d85565b9150506060840151611edb608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f4a61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611f72575f5ffd5b611cad8261191f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fae575f5ffd5b83018035915067ffffffffffffffff821115611fc8575f5ffd5b602001915036819003821315611fdc575f5ffd5b9250929050565b5f5f85851115611ff1575f5ffd5b83861115611ffd575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612069577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561208f575f5ffd5b505191905056fea26469706673582212200d0b6ffbc4323a8d78b5fa67af08befad3e71d217956834350aaf0f84d20765164736f6c634300081d0033";
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
        readonly name: "MULTIPLIER_BASE";
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
                readonly name: "exclusivityParameter";
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
                readonly name: "exclusivityParameter";
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
        readonly name: "InvalidCallData";
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
