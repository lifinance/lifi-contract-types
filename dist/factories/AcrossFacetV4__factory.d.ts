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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161225138038061225183398101604081905261002e91610076565b6001600160a01b0382161580610042575080155b15610060576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0390911660805260a0526100ad565b5f5f60408385031215610087575f5ffd5b82516001600160a01b038116811461009d575f5ffd5b6020939093015192949293505050565b60805160a0516121696100e85f395f818160a0015261093001525f818160ff015281816108e6015281816109df0152610a0a01526121695ff3fe608060405260043610610063575f3560e01c8063e796cd9811610041578063e796cd98146100d5578063f6503992146100ee578063f97136af14610146575f5ffd5b80631794958f14610067578063a1f1ce431461007c578063d999984d1461008f575b5f5ffd5b61007a610075366004611aca565b610161565b005b61007a61008a366004611b90565b6103a5565b34801561009a575f5ffd5b506100c27f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100e0575f5ffd5b506100c2651f2abb7bf89b81565b3480156100f9575f5ffd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100cc565b348015610151575f5ffd5b506100c2670de0b6b3a764000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101dc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101ec3447611c22565b90508680610100015161022b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761024e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610285576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036102c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102ff576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610313895f01518a60c001518a8a3361058e565b60c08a01525f61032287611c67565b9050670de0b6b3a764000061033d60c0890160a08a01611d31565b6fffffffffffffffffffffffffffffffff168b60c0015161035e9190611d51565b6103689190611d68565b60808201526103778a826106d0565b504791505081811115610398576103985f846103938585611c22565b610b0f565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610420576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104303447611c22565b9050846104558160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561048c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610506576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610544576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055687608001518860c00151610b44565b6105688761056388611c67565b6106d0565b5047905081811115610583576105835f846103938585611c22565b50505f909155505050565b5f828082036105c9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105d7600185611c22565b8181106105e6576105e6611da0565b90506020028101906105f89190611dcd565b610609906080810190606001611e09565b90505f61061582610bf8565b905073ffffffffffffffffffffffffffffffffffffffff821661063f5761063c3482611c22565b90505b5f61064a8888610c42565b90506106568888610d4c565b6106638a89898985610db8565b5f8261066e85610bf8565b6106789190611c22565b9050898110156106c2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61012082015161014082015151151590151514610719576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107278360e00151611017565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036107ed5781516107ac576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a361088a565b82610120015115801561081b5750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b15610852576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815161088a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208201516108c5576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff166109d5577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c001518460200151855f01517f000000000000000000000000000000000000000000000000000000000000000087606001518960c001518960800151898b60c001518c60e001518d61010001518e61012001518f61014001516040518e63ffffffff1660e01b81526004016109a29c9b9a99989796959493929190611e6e565b5f604051808303818588803b1580156109b9575f5ffd5b505af11580156109cb573d5f5f3e3d5ffd5b5050505050610ad3565b610a0883608001517f00000000000000000000000000000000000000000000000000000000000000008560c0015161103c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68360200151845f0151856040015186606001518860c001518860800151888a60c001518b60e001518c61010001518d61012001518e61014001516040518d63ffffffff1660e01b8152600401610aa59c9b9a99989796959493929190611e6e565b5f604051808303815f87803b158015610abc575f5ffd5b505af1158015610ace573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b029190611eec565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b3957610b348282611068565b505050565b610b348383836110d5565b805f03610b7d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bd65780341015610bd2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bd273ffffffffffffffffffffffffffffffffffffffff8316333084611143565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c3a57610c3573ffffffffffffffffffffffffffffffffffffffff83163061119b565b610c3c565b475b92915050565b6060815f8167ffffffffffffffff811115610c5f57610c5f61186f565b604051908082528060200260200182016040528015610c88578160200160208202803683370190505b5090505f5f5b83811015610d4157868682818110610ca857610ca8611da0565b9050602002810190610cba9190611dcd565b610ccb906080810190606001611e09565b9150610cd682610bf8565b838281518110610ce857610ce8611da0565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d395734838281518110610d2157610d21611da0565b60200260200101818151610d359190611c22565b9052505b600101610c8e565b509095945050505050565b5f5b81811015610b345736838383818110610d6957610d69611da0565b9050602002810190610d7b9190611dcd565b9050610d8d60e0820160c08301611fff565b15610daf57610daf610da56060830160408401611e09565b8260800135610b44565b50600101610d4e565b83838383825f5b81811015610ffd57368a8a83818110610dda57610dda611da0565b9050602002810190610dec9190611dcd565b9050610e9b610dfe6020830183611e09565b610e0b60a0840184612018565b610e19916004915f91612080565b610e22916120a7565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610fb35750610ecf610eb56060830160408401611e09565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610f235750610ee46020820182611e09565b73ffffffffffffffffffffffffffffffffffffffff16610f0a6040830160208401611e09565b73ffffffffffffffffffffffffffffffffffffffff1614155b8015610fb35750610fb1610f3d6040830160208401611e09565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b15610fea576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ff48c826111ce565b50600101610dbf565b505061100c848484845f611441565b505050505050505050565b5f660416edef1601be82036110335750651f2abb7bf89b919050565b5090565b919050565b610b348383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611658565b73ffffffffffffffffffffffffffffffffffffffff82166110b5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bd273ffffffffffffffffffffffffffffffffffffffff831682611785565b73ffffffffffffffffffffffffffffffffffffffff8216611122576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3473ffffffffffffffffffffffffffffffffffffffff8416838361179e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661118e57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111e66111de6020830183611e09565b6017903b1190565b61121c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361125b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61126f610eb56060850160408601611e09565b611279575f61127f565b82608001355b90505f61129a6112956080860160608701611e09565b610bf8565b9050815f036112d0576112d06112b66060860160408701611e09565b6112c66040870160208801611e09565b866080013561103c565b5f806112df6020870187611e09565b73ffffffffffffffffffffffffffffffffffffffff168461130360a0890189612018565b60405161131192919061210d565b5f6040518083038185875af1925050503d805f811461134b576040519150601f19603f3d011682016040523d82523d5f602084013e611350565b606091505b50915091508161136357611363816117e7565b5f6113776112956080890160608a01611e09565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113a860208a018a611e09565b6113b860608b0160408c01611e09565b6113c860808c0160608d01611e09565b8b608001358987116113da57866113e4565b6113e48a88611c22565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611450600182611c22565b81811061145f5761145f611da0565b90506020028101906114719190611dcd565b611482906080810190606001611e09565b90505f5f5f5f5f5f5f5b888110156116485761149f60018a611c22565b811080156114ae575088600114155b15611589578d8d828181106114c5576114c5611da0565b90506020028101906114d79190611dcd565b6114e8906080810190606001611e09565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611589578a818151811061152f5761152f611da0565b602002602001015161154087610bf8565b61154a9190611c22565b965073ffffffffffffffffffffffffffffffffffffffff86161561156e575f611570565b895b93508387111561158957611589868d610393878b611c22565b8d8d8281811061159b5761159b611da0565b90506020028101906115ad9190611dcd565b6115be906060810190604001611e09565b94506115c985610bf8565b925073ffffffffffffffffffffffffffffffffffffffff8516156115ed575f6115ef565b895b9150818311801561162c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561164057611640858d6103938587611c22565b60010161148c565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561177f5773ffffffffffffffffffffffffffffffffffffffff83166116c1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611734573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611758919061211c565b101561177f5761177f73ffffffffffffffffffffffffffffffffffffffff851684836117f1565b50505050565b5f385f3884865af1610bd25763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166117de576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166117de575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166117de57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156118c0576118c061186f565b60405290565b604051610160810167ffffffffffffffff811182821017156118c0576118c061186f565b5f82601f8301126118f9575f5ffd5b8135602083015f5f67ffffffffffffffff8411156119195761191961186f565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff821117156119665761196661186f565b60405283815290508082840187101561197d575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611037575f5ffd5b80358015158114611037575f5ffd5b5f61014082840312156119dc575f5ffd5b6119e461189c565b823581529050602082013567ffffffffffffffff811115611a03575f5ffd5b611a0f848285016118ea565b602083015250604082013567ffffffffffffffff811115611a2e575f5ffd5b611a3a848285016118ea565b604083015250611a4c60608301611999565b6060820152611a5d60808301611999565b6080820152611a6e60a08301611999565b60a082015260c0828101359082015260e08083013590820152611a9461010083016119bc565b610100820152611aa761012083016119bc565b61012082015292915050565b5f6101608284031215611ac4575f5ffd5b50919050565b5f5f5f5f60608587031215611add575f5ffd5b843567ffffffffffffffff811115611af3575f5ffd5b611aff878288016119cb565b945050602085013567ffffffffffffffff811115611b1b575f5ffd5b8501601f81018713611b2b575f5ffd5b803567ffffffffffffffff811115611b41575f5ffd5b8760208260051b8401011115611b55575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611b78575f5ffd5b611b8487828801611ab3565b91505092959194509250565b5f5f60408385031215611ba1575f5ffd5b823567ffffffffffffffff811115611bb7575f5ffd5b611bc3858286016119cb565b925050602083013567ffffffffffffffff811115611bdf575f5ffd5b611beb85828601611ab3565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c3c57610c3c611bf5565b80356fffffffffffffffffffffffffffffffff81168114611037575f5ffd5b803563ffffffff81168114611037575f5ffd5b5f6101608236031215611c78575f5ffd5b611c806118c6565b8235815260208084013590820152604080840135908201526060808401359082015260808084013590820152611cb860a08401611c35565b60a082015260c08381013590820152611cd360e08401611c54565b60e0820152611ce56101008401611c54565b610100820152611cf86101208401611c54565b61012082015261014083013567ffffffffffffffff811115611d18575f5ffd5b611d24368286016118ea565b6101408301525092915050565b5f60208284031215611d41575f5ffd5b611d4a82611c35565b9392505050565b8082028115828204841417610c3c57610c3c611bf5565b5f82611d9b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611dff575f5ffd5b9190910192915050565b5f60208284031215611e19575f5ffd5b611d4a82611999565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b8c81528b60208201528a60408201528960608201528860808201528760a08201528660c08201528560e082015263ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611eda610180830184611e22565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611f13610160840182611e22565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611f4e8282611e22565b9150506060840151611f78608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611fe761012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561200f575f5ffd5b611d4a826119bc565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261204b575f5ffd5b83018035915067ffffffffffffffff821115612065575f5ffd5b602001915036819003821315612079575f5ffd5b9250929050565b5f5f8585111561208e575f5ffd5b8386111561209a575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612106577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561212c575f5ffd5b505191905056fea264697066735822122004e5ddbad6c2d1ca09bcb9446b7d133073c545754a8ec43dc0a6d1b0f311489564736f6c634300081d0033";
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
